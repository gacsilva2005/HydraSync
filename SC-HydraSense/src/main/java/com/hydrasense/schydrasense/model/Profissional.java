package com.hydrasense.schydrasense.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.ArrayList;

@Getter
@Entity
public class Profissional {

    // Getters e Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String nome;

    @Setter
    private String registroProfissional;

    @Setter
    private String especialidade;

    // Relacionamento com Atleta
    @Setter
    @OneToMany
    private List<Atleta> atletas = new ArrayList<>();

    // Construtor padrão JPA
    public Profissional() {}

    // Métodos
    public void vincularAtleta(Atleta atleta) {
        this.atletas.add(atleta);
    }
}