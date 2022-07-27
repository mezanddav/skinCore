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
    init: function()
    {
        // console.log('check_dependencies');
        // this.check_dependencies();

        this.check_for_updates();

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
        const nc_styles = document.styleSheets;
        console.log(nc_styles);
        _.each(nc_styles, function(nc_style)
        {
            console.log(nc_style);
            if (nc_style.href.match("https://static.ncore.pro/styles/grunge/style_sslv11.css"))
            {
                console.log('false');
                // delete skinCore;
                // return;
            } else 
            {
                console.log('true');
            }
        });
    },
    loader: function()
    {
        // console.log(window.location.href.indexOf("torrents.php"));
    },
    check_for_updates: function()
    {
        console.log(this.get_current_plugin_verison());
        this.get_latest_plugin_verison();
    },
    get_current_plugin_verison: function()
    {
        var manifest = chrome.runtime.getManifest()
        return manifest.version;
    },
    get_latest_plugin_verison: function()
    {
        const manifest_latest = 'https://raw.githubusercontent.com/mezanddav/skinCore/ae72b86e29c0d5577c588bde4f0efd67a14501ec/manifest.json';
        console.log(manifest_latest);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
            if(xhr.readyState == 2 && xhr.status == 200) {
                console.log(xhr.responseText);
                var manifest = JSON.parse(xhr.responseText);
                alert("Version: " + manifest.version);
            }
        };
        xhr.open("GET", manifest_latest);
        xhr.send();
    }
};
skinCore.init();