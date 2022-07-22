import zipfile
import json

manifest = open('manifest.json')
manifest = json.load(manifest)
release_name = manifest['name'] + '-release-' + manifest['version'] + '.zip'
release_path = 'releases/' + release_name

release_files = ['skincore.js', 'skincore.css', 'manifest.json']
with zipfile.ZipFile(release_path, 'w') as zipF:
    for file in release_files:
        zipF.write(file, compress_type=zipfile.ZIP_DEFLATED)

print('Release ready: ', release_name)