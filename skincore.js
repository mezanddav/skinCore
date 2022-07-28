// window.addEventListener('load', function()
// {
//     const html_torrent_list_items = document.getElementsByClassName('torrent_txt');
//     const torrent_list = [];

//     if( html_torrent_list_items ){
//         _.each(html_torrent_list_items, function(list_item){
//             console.log(list_item.getElementsByTagName('a')[0].getAttribute('title'));
//             console.log(list_item.getElementsByTagName('a')[0].getAttribute('onclick'));
//             console.log(list_item.getElementsByTagName('a')[0].getAttribute('href'));
    
//             uploaded = false;
//             uploaded_classes = ['box_feltoltve2', 'box_feltoltve', 'box_feltoltve3', 'feltoltve'];
//             _.each(uploaded_classes, function(uclass){
//                 console.log(list_item.getElementsByTagName('a')[0].getAttribute('title'));
//                 console.log(list_item.getElementsByTagName('a')[0].getAttribute('onclick'));
//                 console.log(list_item.getElementsByTagName('a')[0].getAttribute('href'));
//             });
//         });
//     }

// });

// function torrent(id) {
//     var e = $('#'+id);
//     var loading = '<div class="torrent_lenyilo_lehetoseg"><div class="lehetosegek">Lehetőségeid:</div><div class="letoltve"><a href="torrents.php?action=download&id='+id+'&key=8f195c937115255c8e6fa473d08118e1"><img src="data:image/gif;base64,R0lGODlhDwAPAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAAPAA8AAAINlI+py+0Po5y02otnAQA7" class="torr_reszletek_btn"></a></div><div class="letoltve_txt"><a href="torrents.php?action=download&id='+id+'&key=8f195c937115255c8e6fa473d08118e1">Torrent letöltése</a></div></div><div class="torrent_lenyilo_tartalom"><div style="margin:10px 0;text-align:center"><img src="https://static.ncore.pro/styles/ajax.gif" title="Töltés..."></div></div><div class="torrent_lenyilo_lab"></div>';
//     if (!e.html() || e.html()==loading) {
//         e.html(loading);
//         e.toggle(0);
//         $.get('ajax.php?action=torrent_drop&id='+id,function(data) {e.html(data); BannerEventHandler.init();$('#'+id+' .fancy_groups').fancybox({'onStart':disableKeys,'onClosed':enableKeys,'type':'image'});});
//     } else
//         e.toggle(0);
// }

var skinCore = {
    nc__box_torrent_all__class: 'box_torrent',
    nc__grunge__stylesheet: 'grunge/style',
    latest_release: ' https://github.com/mezanddav/skinCore/releases/latest',
    manifest_latest: 'https://raw.githubusercontent.com/mezanddav/skinCore/ae72b86e29c0d5577c588bde4f0efd67a14501ec/manifest.json',
    init: function()
    {
        if( ! this.check_dependencies() ){ return }


        // this.check_dependencies()
        // this.check_for_updates();

        // var path = window.location.pathname;
        // var page = path.split("/").pop();
        // console.log(page);

        // this.loader();
        // this.container = document.getElementById( this.nav_id );
        // if ( ! this.container ) { return; }
    
        // this.button = this.container.getElementsByTagName( 'button' )[0];
        // if ( 'undefined' === typeof this.button ) { return; }
    
        // this.menu = this.container.getElementsByTagName( 'ul' )[0];
        // if ( 'undefined' === typeof this.menu ) {
        //         this.button.style.display = 'none';
        //         return;
        // }
      
        
    },
    check_dependencies: function()
    {
        var links = document.getElementsByTagName("link");
        for (var i = 0, l = links.length; i < l; i++) {
            var href = links[i].getAttribute('href');
            if(String(href).indexOf(this.nc__grunge__stylesheet) !== -1){
                return true;
                break;
            }
        }
        return false;
    },
    loader: function()
    {
        // console.log(window.location.href.indexOf("torrents.php"));
    },
    check_for_updates: function()
    {
        console.log(this.get_current_plugin_version());
        this.get_latest_plugin_version();
    },
    get_current_plugin_version: function()
    {
        var manifest = chrome.runtime.getManifest()
        return manifest.version;
    },
    get_latest_plugin_version: function()
    {
        fetch(this.manifest_latest).then(function(response)
        {
            if (response.status !== 200) { return }
            response.json().then(function(data) {
                if ( parseFloat(this.get_current_plugin_version()) < parseFloat(data.version)){
                    this.show_update_banner();
                }
            });
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    },
    show_update_banner: function()
    {
        document.getElementById('footer_bg').insertAdjacentHTML('beforebegin','<div class="asterisk">*</div>');
    }
};
window.addEventListener('DOMContentLoaded', function(){ skinCore.init() });