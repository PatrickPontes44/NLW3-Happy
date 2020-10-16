const { orphanage } = require("../pages");
const Database = require("./db");

const saveOrphanage = require('./saveOrphanage');

Database.then( async function(db){

    const orphanage = {
        name: 'Lar das meninas',
        about: "Voluptas delectus ut expedita minus dignissimos quo ea.",
        images: [
            "https://picsum.photos/500",
            "https://picsum.photos/500",
            "https://picsum.photos/500",
            "https://picsum.photos/500",
            "https://picsum.photos/500",
            "https://picsum.photos/500"
        ].toString(),
        whatsapp: "9929298347",
        lat: "-25.3676643",
        lng: "-49.1539316",
        instructions: "Impedit rem dolores aut incidunt.",
        opening_hours: 'Horário de visitas 8h - 18h',
        open_on_weekends: '0'
    }

    const values = await saveOrphanage(db, orphanage)

})