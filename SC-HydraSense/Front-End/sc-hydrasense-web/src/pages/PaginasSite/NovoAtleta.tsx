import { useState } from 'react';
import { ArrowLeft, Save, User, Mail, Weight, Ruler } from 'lucide-react';

interface NovoAtletaProps {
    onBack: () => void;
}

export function NovoAtleta({ onBack }: NovoAtletaProps) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        clube: '',
        modalidadePrincipal: '',
        pesoAtual: '',
        altura: '',
        dataNascimento: ''
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/Atleta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    clube: formData.clube,
                    modalidadePrincipal: formData.modalidadePrincipal,
                    pesoAtual: parseFloat(formData.pesoAtual),
                    altura: parseFloat(formData.altura),
                    dataNascimento: formData.dataNascimento
                })
            });

            if (!response.ok) {
                alert("Erro ao cadastrar atleta");
                return;
            }

            const atletaSalvo = await response.json();
            console.log("Atleta salvo:", atletaSalvo);
            alert("Atleta cadastrado com sucesso!");
            onBack();

        } catch (error) {
            console.error(error);
            alert("Erro ao conectar ao servidor");
        }
    };

    return (
        <div className="novo-atleta-wrapper">
            {/* === CABEÇALHO DO FORMULÁRIO === */}
            <div className="atletas-header">
                <div className="atletas-header__info">
                    <button className="btn-back" onClick={onBack}>
                        <ArrowLeft size={20} /> Voltar para a listagem
                    </button>
                    <h1 className="pageweb__title">CADASTRAR NOVO ATLETA</h1>
                    <p>Preencha os dados técnicos abaixo para iniciar o monitoramento de hidratação.</p>
                </div>
            </div>

            <form className="novo-atleta-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="filtro-grupo">
                        <label>Nome Completo</label>
                        <div className="input-wrapper">
                            <User size={18} className="icone-busca" />
                            <input
                                type="text"
                                name="nome"
                                placeholder="Ex: Carlos Silva"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="filtro-grupo">
                        <label>E-mail de Contato</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="icone-busca" />
                            <input
                                type="email"
                                name="email"
                                placeholder="atleta@time.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="filtro-grupo">
                        <label>Time / Clube</label>
                        <select
                            name="clube"
                            value={formData.clube}
                            onChange={handleChange}
                        >
                            <option value="">Selecione o time</option>
                            <option value="SPFC">São Paulo FC</option>
                            <option value="PAL">Palmeiras</option>
                            <option value="COR">Corinthians</option>
                            <option value="SAN">Santos</option>
                        </select>
                    </div>

                    <div className="filtro-grupo">
                        <label>Modalidade</label>
                        <select
                            name="modalidadePrincipal"
                            value={formData.modalidadePrincipal}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione a modalidade</option>
                            <option value="futebol">Futebol</option>
                            <option value="basquete">Basquete</option>
                            <option value="volei">Vôlei</option>
                        </select>
                    </div>

                    <div className="filtro-grupo">
                        <label>Peso Inicial (kg)</label>
                        <div className="input-wrapper">
                            <Weight size={18} className="icone-busca" />
                            <input
                                type="number"
                                name="pesoAtual"
                                placeholder="00.0"
                                min="30"
                                max="200"
                                step="0.1"
                                value={formData.pesoAtual}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="filtro-grupo">
                        <label>Altura (cm)</label>
                        <div className="input-wrapper">
                            <Ruler size={18} className="icone-busca" />
                            <input
                                type="number"
                                name="altura"
                                placeholder="180"
                                min="100"
                                max="250"
                                step="1"
                                value={formData.altura}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="filtro-grupo">
                        <label>Data de Nascimento</label>
                        <div className="input-wrapper">
                            <input
                                type="date"
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={onBack}>
                        CANCELAR
                    </button>
                    <button type="submit" className="btn-primary">
                        <Save size={18} /> SALVAR REGISTRO
                    </button>
                </div>
            </form>
        </div>
    );
}