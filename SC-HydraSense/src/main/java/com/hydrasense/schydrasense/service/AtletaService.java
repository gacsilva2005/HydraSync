package com.hydrasense.schydrasense.service;

import com.hydrasense.schydrasense.model.Atleta;
import com.hydrasense.schydrasense.repository.AtletaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtletaService {

    private final AtletaRepository repository;

    public AtletaService(AtletaRepository repository) {
        this.repository = repository;
    }

    // Salvar atleta
    public Atleta salvar(Atleta atleta) {
        return repository.save(atleta);
    }

    // Listar todos os atletas
    public List<Atleta> listarTodos() {
        return repository.findAll();
    }

    // Buscar atleta por ID
    public Optional<Atleta> buscarPorId(Long id) {
        return repository.findById(id);
    }

    // Deletar atleta
    public void deletar(Long id) {
        repository.deleteById(id);
    }

    // Atualizar dados do atleta
    public Atleta atualizar(Long id, Atleta atletaAtualizado) {
        return repository.findById(id)
                .map(atleta -> {
                    atleta.setNome(atletaAtualizado.getNome());
                    atleta.setDataNascimento(atletaAtualizado.getDataNascimento());
                    atleta.setModalidadePrincipal(atletaAtualizado.getModalidadePrincipal());
                    atleta.setPesoAtual(atletaAtualizado.getPesoAtual());
                    return repository.save(atleta);
                })
                .orElseThrow(() -> new RuntimeException("Atleta não encontrado"));
    }
}