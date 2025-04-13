# 🔐 OAuth2 Test — Keycloak Integration (`oauth-test.md`)

Документ містить опис тестування авторизації через Keycloak для всіх підтримуваних потоків авторизації відповідно до OpenAPI специфікації.

---

## 📌 Загальні параметри

- **Realm:** `horpynych`
- **Authorization Server:** `http://localhost:8080`
- **User Info Endpoint:** `GET /realms/horpynych/protocol/openid-connect/userinfo`
- **Scope:** `openid`

---

## 1️⃣ Authorization Code Flow

> Рекомендовано для бекенд-додатків або SPA з бекенд-сервером.

**Параметри авторизації:**

```
authorizationUrl: http://localhost:8080/realms/horpynych/protocol/openid-connect/auth
tokenUrl:        http://localhost:8080/realms/horpynych/protocol/openid-connect/token
scope:           openid
client_id:       auth-code-flow
client_secret:   <your-client-secret> (if required)
```

**Кроки:**

1. Натисніть `Authorize` в Swagger UI, оберіть `keycloakAuthCode`.
2. Увійдіть у Keycloak.
3. Swagger автоматично отримає `access_token`.

**Запит:**

```
GET /realms/horpynych/protocol/openid-connect/userinfo
Authorization: Bearer <access_token>
```

**Відповідь (200 OK) (приклад):**
```json
{
  "sub": "50184ddf-5ad8-4ea4-a38d-69e66a1a3772",
  "email_verified": true,
  "name": "Valeriia Horpynych",
  "preferred_username": "horpynych",
  "given_name": "Valeriia",
  "family_name": "Horpynych",
  "email": "valeria.gorpinich.58@gmail.com"
}
```

---

## 2️⃣ Implicit Flow

> Підходить для чистих SPA-додатків, але небажано у нових проєктах через обмежену безпеку.

**Параметри авторизації:**

```
authorizationUrl: http://localhost:8080/realms/horpynych/protocol/openid-connect/auth
scope:            openid
client_id:        implicit-flow
```

**Кроки:**

1. Натисніть `Authorize`, оберіть `keycloakImplicit`.
2. Увійдіть у Keycloak — `access_token` повертається у URL фрагменті.
3. Swagger UI автоматично його використовує.

**Запит:**

```
GET /realms/horpynych/protocol/openid-connect/userinfo
Authorization: Bearer <access_token>
```

**Відповідь (200 OK) (приклад):**
```json
{
  "sub": "50184ddf-5ad8-4ea4-a38d-69e66a1a3772",
  "email_verified": true,
  "name": "Valeriia Horpynych",
  "preferred_username": "horpynych",
  "given_name": "Valeriia",
  "family_name": "Horpynych",
  "email": "valeria.gorpinich.58@gmail.com"
}
```

---

## 3️⃣ Password Flow

> Для довірених додатків. Потребує введення логіна та пароля користувача.

**Параметри авторизації:**

```
tokenUrl:        http://localhost:8080/realms/horpynych/protocol/openid-connect/token
username:        horpynych
password:        1234
scope:           openid
client_id:       password-credentials-flow
client_secret:   <your-client-secret> (if required)
```

**Кроки:**

1. Натисніть `Authorize`, оберіть `keycloakPassword`.
2. Увійдіть у Keycloak.
3. Swagger UI автоматично його використовує.

**Запит:**

```http
GET /realms/horpynych/protocol/openid-connect/userinfo
Authorization: Bearer <access_token>
```

**Відповідь (200 OK) (приклад):**
```json
{
  "sub": "50184ddf-5ad8-4ea4-a38d-69e66a1a3772",
  "email_verified": true,
  "name": "Valeriia Horpynych",
  "preferred_username": "horpynych",
  "given_name": "Valeriia",
  "family_name": "Horpynych",
  "email": "valeria.gorpinich.58@gmail.com"
}
```

---

## 4️⃣ Client Credentials Flow

> Для авторизації між сервісами (server-to-server), без участі користувача.

**Параметри авторизації:**

```
tokenUrl:        http://localhost:8080/realms/horpynych/protocol/openid-connect/token
scope:           openid
client_id:       password-credentials-flow
client_secret:   <your-client-secret>
```

**Кроки:**

1. Натисніть `Authorize`, оберіть `keycloakClientCreds`.
2. Увійдіть у Keycloak.
3. Swagger UI автоматично його використовує.

**Запит:**

```http
GET /realms/horpynych/protocol/openid-connect/userinfo
Authorization: Bearer <access_token>
```

**Відповідь (200 OK) (приклад):**
```json
{
  "sub": "fd1ea7fb-497e-4902-ac87-fe4f82a10445",
  "email_verified": false,
  "preferred_username": "service-account-client-credentials-flow"
}
```

