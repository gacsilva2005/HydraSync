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

    // Relacionamento 1:M com Atleta
    @OneToMany(mappedBy = "profissional", cascade = CascadeType.ALL)
    private List<Atleta> atletas = new ArrayList<>();

    // Construtor padrão JPA
    public Profissional() {}

    // Métodos
    public void vincularAtleta(Atleta atleta) {
        atletas.add(atleta);
        atleta.setProfissional(this);
    }
}