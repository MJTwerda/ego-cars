# 🚘 Ego Cars - Next.js 15  

Este es una Aplicación [Next.js] v15 (https://nextjs.org) iniciado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Esta aplicación está creada para validar mis conocimientos en React con Next y TypeScript.

Utiliza la API propia de Ego.

## ⚙️ Configuraciones iniciales
Primero debés clonarte el repositorio ejecutando 

```bash
git clone <url del proyecto>
```

Como esta Aplicación utiliza librerías de terceros, para que la compilación sea exitosa debés ejecutar 
```bash
npm install
``` 

Además debés asegurarte de estar usando una versión **Node v18.18.0** o superior.

## ¿Cómo empezar a usar la Aplicación?
📌 ```IMPORTANTE```

Para poder correr la Aplicación localmente debés crearte un archivo ```.env.local``` en la raíz del proyecto (esto es en la misma ubicación en la que se encuentra el archivo .env.example) que contenga las mismas keys que se proporcionan en el archivo ```.env.example```. Sin este archivo la aplicación no compilará correctamente, ya que toda la información sensible se encuentra en el .env.local.

___El valor de cada key se proporcionará de manera privada y por correo a las personas responsables de su revisión.___

🚀 Entonces, si ya tenés tu archivo .env.local e instalaste las dependencias ya podés ejecutar el Servidor de Desarrollo para empezar a disfrutar localmente de la aplicación Ego Cars.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Si el servidor está corriendo abrí el puerto [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado. 🚘

📰 📰  ```EXTRA, EXTRA! ```
Esta aplicación contiene Test Unitarios para tener un mayor control de los cambios que se efectúan en los diferentes ciclos de desarrollo de la misma, detectar errores de manera temprana y así lograr una mayor confianza en el código.
Dichos test se realizaron con ***Jest***.

## ¿Cómo ejecuto los tests de la Aplicación?
Podés ejecutar todos los tests existentes con el comando 

```
npm run test
```

O bien podés ejecutar tests individuales utilizando el nombre del archivo con el comando

```
npm run test <Nombre del archivo que se quiere testear>
```

Espero que la Aplicación sea de tu agrado y te diviertas mucho, tando dentro como fuera de ella.
