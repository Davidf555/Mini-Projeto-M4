const {
    acre,
    alagoas,
    amazonas,
    bahia,
    ceara,
    distritoFederal,
    espiritoSanto,
    goias,
    maranhao,
    matoGrossoDoSul,
    minasGerais,
    paraiba,
    parana,
    pernambuco,
    piaui,
    rioDeJaneiro,
    rioGrandeDoNorte,
    rioGrandeDoSul,
    santaCatarina,
    saoPaulo,
    sergipe
} = require('./banco');

const express = require('express');
const router = express.Router();

router.get('/Tudo', (req, res) => {
    res.json({
        acre,
        alagoas,
        amazonas,
        bahia,
        ceara,
        distritoFederal,
        espiritoSanto,
        goias,
        maranhao,
        matoGrossoDoSul,
        minasGerais,
        paraiba,
        parana,
        pernambuco,
        piaui,
        rioDeJaneiro,
        rioGrandeDoNorte,
        rioGrandeDoSul,
        santaCatarina,
        saoPaulo,
        sergipe
    });
});

module.exports = router;
