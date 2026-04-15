package com.hydrasense.schydrasense.model;

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

    private LocalDateTime dataHoraFim;

    private Float distanciaPercorrida;

    private String modalidade;

    private String intensidadePercebida;

    // Construtor padrão JPA
    public SessaoDeTreino() {}

    public void setDataHoraFim(LocalDateTime dataHoraFim) {
        this.dataHoraFim = dataHoraFim;
    }

    public void setDistanciaPercorrida(Float distanciaPercorrida) {
        this.distanciaPercorrida = distanciaPercorrida;
    }

    public void setModalidade(String modalidade) {
        this.modalidade = modalidade;
    }

    public void setIntensidadePercebida(String intensidadePercebida) {
        this.intensidadePercebida = intensidadePercebida;
    }

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
}