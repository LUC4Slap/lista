<?php 

    class LoginService{
        private $conexao;
        private $login;

        public function __construct(Conexao $conexao, Login $login){
            $this->conexao = $conexao->conectar();
            $this->login = $login;
        }

        public function cosultar() { //read
            $query = "SELECT * FROM tb_usuarios WHERE email = ? AND senha = ?";            
            $stmt = $this->conexao->prepare($query);
		    $stmt->bindValue(1, $this->login->__get('email'));
            $stmt->bindValue(2, $this->login->__get('senha'));
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_OBJ);
        }
    }
?>