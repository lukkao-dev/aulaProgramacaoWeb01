// ------------------- Templates -------------------

const templates = {

inicio: `
<section>
  <h2>Bem-vindo à ONG FELINONG. Quem somos?</h2>
  <p>Nós somos uma organização sem fins lucrativos dedicada ao bem-estar dos felinos.</p>
  <img src="imagens/resgatedegato.png" height="450" width="450" alt="Gatos resgatados">
</section>

<section>
  <h2>Nossa missão</h2>
  <p>Resgatar, cuidar e encontrar lares amorosos para gatos abandonados e em situação de risco — incluindo aqueles com deficiência física.</p>
  <img src="imagens/resgatedegatinhos.png" alt="Gatinhos resgatados" width="400">
</section>

<section>
  <h2>Por que fazer parte da FELINONG?</h2>
  <p>Ser voluntário na FELINONG é uma oportunidade única de fazer a diferença na vida de gatos resgatados.<br>
     Nossos voluntários ajudam em diversas áreas: alimentação, limpeza, cuidados médicos, socialização e eventos de adoção.</p>
  <img src="imagens/voluntarios.png" alt="Voluntários cuidando de gatos" width="600">
  <p>Se você ama animais e deseja contribuir com tempo e carinho, venha fazer parte da nossa equipe de voluntários!</p>
</section>

<section>
  <h2>Como Doar</h2>
  <p>Sua doação é essencial para continuarmos nosso trabalho!<br>
     Aceitamos doações financeiras e de materiais como ração, areia, medicamentos e produtos de limpeza.</p>
  <img src="imagens/doacoes.png" alt="Várias doações" width="600">
  <p>Toda contribuição, por menor que pareça, ajuda a salvar vidas felinas. 💖</p>
</section>

<section>
  <h2>Como você pode ajudar</h2>
  <section class="acoes">
    <button class="acao-botao">Adote <br> um <br> gato</button>
    <button class="acao-botao">Seja <br> um <br> doador</button>
    <button class="acao-botao">Seja <br> membro <br> da equipe</button>
  </section>
</section>

<section>
  <h2>Entre em contato conosco</h2>
  <p>Se você tiver alguma dúvida ou quiser mais informações, entre em contato pelo e-mail: <strong>contato@felinong.org</strong> ou telefone: (12) 99219-1874</p>
  <address>Rua dos Gatos, 123 - Centro - São Paulo - SP</address>
</section>
`,

projeto: `
<section class="missao-section">
  <h2>Voluntariado</h2>
  <p>Ser voluntário na FELINONG é uma oportunidade única de fazer a diferença na vida de gatos resgatados.
     Nossos voluntários ajudam em diversas áreas: alimentação, limpeza, cuidados médicos, socialização e eventos de adoção.</p>
  <img src="imagens/cuidadordegato.png" alt="Voluntário cuidando de um gato" width="400">
  <ul style="font-size: 20px;">
    <li>Alimentação e cuidados diários</li>
    <li>Limpeza e higienização</li>
    <li>Transporte para clínicas veterinárias</li>
    <li>Eventos de adoção e socialização</li>
  </ul>
</section>

<section class="doacao-section">
  <h2>Como Doar</h2>
  <p>Sua doação é essencial! Aceitamos doações financeiras e materiais para continuar nosso trabalho.</p>
  <img src="imagens/doandoracao.png" alt="Pessoa doando ração" width="400">
  <ul class="lista-doacao" >
    <li>PIX: <strong>felinong@ong.org</strong></li>
    <li>Depósito bancário: Banco do Brasil, Ag. 1234, Conta: 56789-0</li>
    <li>Entrega presencial em nossa sede</li>
    <li>Ração e alimentos</li>
    <li>Medicamentos</li>
    <li>Caixas de transporte</li>
    <li>Produtos de limpeza</li>
  </ul>
  <p>Toda contribuição, por menor que pareça, ajuda a salvar vidas felinas. 💖</p>
</section>

<section>
  <h2>Resgates Recentes</h2>
  <img src="imagens/gatosresgatados.png" alt="Gatos sendo resgatados" width="400">
  <p>Esses gatinhos foram recentemente resgatados e agora estão recebendo todo o cuidado necessário.
     Em breve, estarão disponíveis para adoção responsável!</p>
</section>

<section class="acoes">
  <button class="acao-botao">Adote</button>
  <button class="acao-botao">Doe</button>
  <button class="acao-botao">Participe</button>
</section>
`,

cadastro: `
<section class="cadastro-section">
  <h2>Cadastro de Voluntário / Doador</h2>
  <form id="cadastroForm">
    <fieldset>
      <legend>Dados Pessoais</legend>
      <label>Nome Completo: <input type="text" id="nome" required></label>
      <label>E-mail: <input type="email" id="email" required></label>
      <label>CPF: <input type="text" id="cpf" required></label>
      <label>Telefone: <input type="tel" id="telefone" required></label>
      <label>Data de Nascimento: <input type="date" id="nascimento" required></label>
    </fieldset>

    <fieldset>
      <legend>Endereço</legend>
      <label>Endereço: <input type="text" id="endereco" required></label>
      <label>CEP: <input type="text" id="cep" required></label>
      <label>Cidade: <input type="text" id="cidade" required></label>
      <label>Estado:
        <select id="estado" required>
          <option value="">Selecione</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="MG">MG</option>
          <option value="RS">RS</option>
        </select>
      </label>
    </fieldset>

    <input type="submit" value="Enviar Cadastro">
  </form>
</section>
`
};
