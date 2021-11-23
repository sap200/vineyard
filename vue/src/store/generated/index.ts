// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Sap200VineyardSap200VineyardVineyard from './sap200/vineyard/sap200.vineyard.vineyard'


export default { 
  Sap200VineyardSap200VineyardVineyard: load(Sap200VineyardSap200VineyardVineyard, 'sap200.vineyard.vineyard'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
