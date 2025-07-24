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

router.get('/acre', (req, res) => res.json(acre));
router.get('/alagoas', (req, res) => res.json(alagoas));
router.get('/amazonas', (req, res) => res.json(amazonas));
router.get('/bahia', (req, res) => res.json(bahia));
router.get('/ceara', (req, res) => res.json(ceara));
router.get('/distrito-federal', (req, res) => res.json(distritoFederal));
router.get('/espirito-santo', (req, res) => res.json(espiritoSanto));
router.get('/goias', (req, res) => res.json(goias));
router.get('/maranhao', (req, res) => res.json(maranhao));
router.get('/mato-grosso-do-sul', (req, res) => res.json(matoGrossoDoSul));
router.get('/minas-gerais', (req, res) => res.json(minasGerais));
router.get('/paraiba', (req, res) => res.json(paraiba));
router.get('/parana', (req, res) => res.json(parana));
router.get('/pernambuco', (req, res) => res.json(pernambuco));
router.get('/piaui', (req, res) => res.json(piaui));
router.get('/rio-de-janeiro', (req, res) => res.json(rioDeJaneiro));
router.get('/rio-grande-do-norte', (req, res) => res.json(rioGrandeDoNorte));
router.get('/rio-grande-do-sul', (req, res) => res.json(rioGrandeDoSul));
router.get('/santa-catarina', (req, res) => res.json(santaCatarina));
router.get('/sao-paulo', (req, res) => res.json(saoPaulo));
router.get('/sergipe', (req, res) => res.json(sergipe));

module.exports = router;
