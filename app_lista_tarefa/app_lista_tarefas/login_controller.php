<?php 
    require "../../app_lista_tarefas/login.model.php";
    require "../../app_lista_tarefas/login.service.php";
    require "../../app_lista_tarefas/conexao.php";

    if($_POST['email'] == '' && $_POST['senha'] == ''){
        header('location: index.php');
    }

    if(isset($_POST['btn_logar'])){
        // echo "entrei aqui <br/>";
        $login = new Login();
        $login->__set('email', $_POST['email'])
            ->__set('senha', $_POST['senha']);

        $conexao = new Conexao();

        $loginService = new LoginService($conexao, $login);
        $result = $loginService->cosultar();
        print_r($result);
        echo $result[0]->senha;
        if($login->__get('email') == $result[0]->email && $login->__get('senha') == $result[0]->senha){
            header('location: home.php');
        }       
    }
?>