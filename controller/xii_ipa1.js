const xii_ipa1 = require("../model/xii_ipa1");

module.exports = {
    
    index: async (req, res) => {
        const result = await xii_ipa1.findAll({
            order: ["no"]
        });
        res.render("xii_ipa1/index", { result });
    },
        
    create: (req, res) => {
        res.render("xii_ipa1/create");
    },
        
    storage: async (req, res) => {
        if (!req.body.nama || req.body.nama == "") {
            res.send("<h1>Nama Harus Diisi</h1>");
            return;
        }
        
        const resultAll = await xii_ipa1.findAll({order: ["no","nama"]});
        // Function Create Data
        const addDataSiswa = async (i) => {
            const result = await xii_ipa1.create({
                no: i,
                nama: req.body.nama,
                alamat: req.body.alamat,
                kd_hobi: req.body.kd_hobi
            });
            res.redirect("/xii_ipa1");
        };
        // Validation
        if (resultAll.length === 0) {
            addDataSiswa(1);
            return;
        }
        for (let i = 0; i < resultAll.length; i++) {
            for (let i = 0; i < resultAll.length; i++) {
                if (resultAll[i].nama.toLowerCase() === req.body.nama.toLowerCase()) {
                    res.send("<h1>salah, gaboleh sama</h1>");
                    return;
                }
            }
            if (resultAll[i].no > i+1) {
                addDataSiswa(i+1);
                return;
            } else if (resultAll[i].no === resultAll.length) {
                addDataSiswa(resultAll.length+1);
            }
        }
    },
    
    edit: async (req, res) => {
        const resultOne = await xii_ipa1.findAll({
            where: { no: req.params.no }
        });
        res.render("xii_ipa1/edit", { result: resultOne[0] });
    },
    
    update: async (req, res) => {
        const resultAll = await xii_ipa1.findAll({order: ["no"]});
        const resultOne = await xii_ipa1.findAll({
            where: { no: req.params.no }
        });
        
        // Validation
        if (resultOne.length === 0) {
            res.send("<h1>kosong</h1>");
            return;
        }
        for (let i = 0; i < resultAll.length; i++) {
            if (resultAll[i].nama === req.body.nama) {
                res.send("<h1>gaboleh sama</h1>")
                return;
            }
        }
        // Update Data
        const result = await xii_ipa1.update({
            nama: req.body.nama,
            alamat: req.body.alamat,
            kd_hobi: req.body.kd_hobi
        },{
            where: {no: req.params.no}
        });
        res.redirect("/xii_ipa1");
    },
    
    destroy: async (req, res) => {
        const resultOne = xii_ipa1.findAll({
            where: { no: req.params.no }
        });
        
        // Validation 
        if (resultOne.length === 0) {
            res.send("<h1>Tidak ditemukan</h1>");
            return;
        }
        // Delete Data
        const result = await xii_ipa1.destroy({
            where: { no: req.params.no }
        });
        res.redirect("/xii_ipa1");
    },
    
};

