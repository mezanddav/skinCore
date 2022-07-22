import zipfile
import json

release_manifest = open('manifest.json')
release_files = ['skincore.js', 'skincore.css', 'manifest.json']

release_version = json.load(release_manifest)['version']
release_name = 'release-' + release_version + '.zip'
release_path = 'releases/' + release_name

with zipfile.ZipFile(release_path, 'w') as zipF:
    for file in release_files:
        zipF.write(file, compress_type=zipfile.ZIP_DEFLATED)

print('Release ready: ', release_name)