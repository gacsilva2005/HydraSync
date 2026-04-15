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
}