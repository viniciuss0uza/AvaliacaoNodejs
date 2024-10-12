const service = require('../services/api');

class controllerApi {
    Operacoes (req, res) {
    const operacoes = service.getOperacoes();
    res.json({ operacoes });
    }

    Somar(req, res) {
        try {
            const { a, b } = req.body;
            const result = service.Somar(a, b);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    Subtracao(req, res) {
        try {
            const { a, b } = req.body;
            const result = service.subtracao(a, b);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    Multiplicacao(req, res) {
        try {
            const { a, b } = req.body;
            const result = service.multiplicacao(a, b);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    Divisao(req, res) {
        try {
            const { a, b } = req.body;
            const result = service.divisao(a, b);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    Potencia(req, res) {
        try {
            const { base, exponent } = req.body;
            const result = service.potencia(base, exponent);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    Sqrt (req, res) {
        try {
            const { number } = req.body;
            const result = service.sqrt(number);
            res.json({ result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}