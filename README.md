# Cadastro de Carro

**RF**
- Deve ser possível cadastrar um novo carro

**RN**

- Não deve ser possível cadastrar um carro com placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado com disponibilidade, por padrão.
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome da carro.


**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no Carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN**
- Não deve ser possível cadastrar uma especificação para um carro inexistente.
- Não deve ser possível cadastrar uma especificação já cadastrada para o carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadasatrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**
- Deve ser possível realizar o agendamento do carro para aluguel.
- 

**RN**
- O aluguel deve ter duração mínima de 24 horas.
- O aluguel não pode ser efetuado se já estiver locado no mesmo período
- 
