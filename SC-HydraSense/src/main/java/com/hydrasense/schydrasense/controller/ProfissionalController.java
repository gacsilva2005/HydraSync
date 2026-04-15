package com.hydrasense.schydrasense.controller;

import com.hydrasense.schydrasense.model.Profissional;
import com.hydrasense.schydrasense.service.ProfissionalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profissionais")
public class ProfissionalController {

    private final ProfissionalService service;

    public ProfissionalController(ProfissionalService service) {
        this.service = service;
    }

    @PostMapping
    public Profissional salvar(@RequestBody Profissional profissional) {
        return service.salvar(profissional);
    }

    @GetMapping
    public List<Profissional> listar() {
        return service.listar();
    }

    @GetMapping("/{id}") //Ainda sem id nenhum ou parâmetro de busca
    public Profissional buscar(@PathVariable Long id) {
        return service.buscarPorId(id)
                .orElseThrow(() -> new RuntimeException("Profissional não encontrado"));
    }

    @DeleteMapping("/{id}") //Ainda sem id nenhum ou parâmetro de busca
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}