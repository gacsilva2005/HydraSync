package com.hydrasense.schydrasense.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Entity
public class SessaoDeTreino {

    // Getters e Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private LocalDateTime dataHoraInicio;

    @Setter
    private LocalDateTime dataHoraFim;

    @Setter
    private Float distanciaPercorrida;

    @Setter
    private String modalidade;

    @Setter
    private String intensidadePercebida;

    // Relação 1:1 Registro de Sintoma
    @Setter
    @OneToOne(mappedBy = "sessaoDeTreino", cascade = CascadeType.ALL)
    private RegistroDeSintoma registroDeSintoma;

    // Relação M:1 com Atleta
    @ManyToOne
    @JoinColumn(name = "atleta_id")
    @JsonIgnore
    private Atleta atleta;

    // Construtor padrão JPA
    public SessaoDeTreino() {}

    //Métodos da Classe

    public void iniciarTreino() {
        this.dataHoraInicio = LocalDateTime.now();
    }

    public void finalizarTreino() {
        this.dataHoraFim = LocalDateTime.now();
    }

    public long calcularDuracaoTotal() {
        if (dataHoraInicio != null && dataHoraFim != null) {
            return java.time.Duration.between(dataHoraInicio, dataHoraFim).toMinutes();
        }
        return 0;
    }

    public void setAtleta(Atleta atleta) {
        this.atleta = atleta;
    }
}