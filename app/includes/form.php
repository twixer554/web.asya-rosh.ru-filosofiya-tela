<?php

$name = $email = $phone = "";
$is_valid = true;

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (!empty($_POST["user_name"])) {

    $name = test_input($_POST["user_name"]);

    if (preg_match("/^(([a-zA-Z' -]{1,30})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,30}))$/u", $name)) {
      $name = true;
    }
    else {
      $name = 'Введите имя русскими буквами без цифр';
      $is_valid = false;
    }
  }
  else {
    $name = 'Заполните поле имя';
    $is_valid = false;
  }

  if (!empty($_POST["user_email"])) {

    $email = test_input($_POST["user_email"]);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email = true;
    }
    else {
      $email = 'Некорректно указан email';
      $is_valid = false;
    }
  } else {
    $email = 'Заполните поле email';
    $is_valid = false;
  }

  if (!empty($_POST["user_phone"])) {

    $phone = test_input($_POST["user_phone"]);

    if (preg_match("/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/", $phone)) {
      $phone = true;
    }
    else {
      $phone = 'Неверный формат телефона';
      $is_valid = false;
    }
  } else {
    $phone = 'Заполните поле телефон';
    $is_valid = false;
  }
}

$errors[] = ['name' => $name];
$errors[] = ['email' => $email];
$errors[] = ['phone' => $phone];

if ($is_valid == false) {
  $response = [
    'errors' => $errors,
    'status' => false,
  ];

  echo json_encode($response);
  exit;
}

// AMOCRM

$amo_count_file_name = 'amocounter';

file_exists('amocounter') ?
  file_put_contents($amo_count_file_name, file_get_contents($amo_count_file_name) + 1) :
  file_put_contents($amo_count_file_name, '1');

$amo_count =  file_get_contents($amo_count_file_name);

require_once 'amocrm.phar';

try {

  // Создание клиента
  $subdomain = '79855726725';
  $login     = '79855726725@yandex.ru';
  $apikey    = '1945b59f9849298029ffbeb3dc6fdec364113f5d';

  // Чтобы узнать apikey, в консоли нужно ввести «AMOCRM.widgets.system.amohash»

  $amo = new \AmoCRM\Client($subdomain, $login, $apikey);

  // создаем лида
  $lead = $amo->lead;
  $lead['name'] = "Запись на консультацию № $amo_count — Философия тела";

  $id = $lead->apiAdd();

  // Получение экземпляра модели для работы с контактами
  $contact = $amo->contact;

  // Заполнение полей модели
  $contact['name'] = isset($_POST['user_name']) ? $_POST['user_name'] : 'Клиент';
  $contact['linked_leads_id'] = [(int)$id];

  $contact->addCustomField(637613, [ [$_POST['user_phone'], 'MOB'], ]);
  $contact->addCustomField(637615, [ [$_POST['user_email'], 'PRIV'], ]);

  // Добавление нового контакта и получение его ID
  $id = $contact->apiAdd();


  $response = [
    'status' => true,
  ];

  echo json_encode($response);
  exit;

} catch (\AmoCRM\Exception $e) {
  printf('Error (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
}

?>