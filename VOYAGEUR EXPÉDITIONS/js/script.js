/* =========================
   FORMULÁRIO DE CONTATO
========================= */

const formContato =
    document.getElementById("formContato");

if (formContato) {

    formContato.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const telefone =
            document.getElementById("telefone").value;

        const email =
            document.getElementById("email").value;

        const mensagem =
            document.getElementById("mensagem").value;


        const mensagens =
            JSON.parse(
                localStorage.getItem("mensagens")
            ) || [];


        mensagens.push({

            nome: nome,

            telefone: telefone,

            email: email,

            mensagem: mensagem

        });


        localStorage.setItem(
            "mensagens",
            JSON.stringify(mensagens)
        );


        document.getElementById(
            "mensagemSucesso"
        ).innerText =
            "Mensagem enviada com sucesso!";


        formContato.reset();

    });

}


/* =========================
   FORMULÁRIO DE RESERVA
========================= */

const formReserva =
    document.getElementById("formReserva");

if (formReserva) {

    formReserva.addEventListener("submit", function(event) {

        event.preventDefault();


        const nome =
            document.getElementById(
                "nomeReserva"
            ).value;


        const telefone =
            document.getElementById(
                "telefoneReserva"
            ).value;


        const email =
            document.getElementById(
                "emailReserva"
            ).value;


        const data =
            document.getElementById(
                "dataViagem"
            ).value;


        const passageiros =
            document.getElementById(
                "passageiros"
            ).value;


        const pagamento =
            document.querySelector(
                'input[name="pagamento"]:checked'
            ).value;


        const reservas =
            JSON.parse(
                localStorage.getItem("reservas")
            ) || [];


        reservas.push({

            nome: nome,

            telefone: telefone,

            email: email,

            data: data,

            passageiros: passageiros,

            pagamento: pagamento

        });


        localStorage.setItem(
            "reservas",
            JSON.stringify(reservas)
        );


        document.getElementById(
            "reservaSucesso"
        ).innerText =
            "Reserva registrada com sucesso!";


        formReserva.reset();

    });

}


/* =========================
   DASHBOARD
========================= */

const listaReservas =
    document.getElementById("listaReservas");


if (listaReservas) {

    const reservas =
        JSON.parse(
            localStorage.getItem("reservas")
        ) || [];


    const mensagens =
        JSON.parse(
            localStorage.getItem("mensagens")
        ) || [];


    document.getElementById(
        "totalReservas"
    ).innerText =
        reservas.length;


    document.getElementById(
        "totalMensagens"
    ).innerText =
        mensagens.length;


    let totalPassageiros = 0;


    reservas.forEach(function(reserva) {

        totalPassageiros +=
            Number(reserva.passageiros);

    });


    document.getElementById(
        "totalPassageiros"
    ).innerText =
        totalPassageiros;


    reservas.forEach(function(reserva) {

        const linha =
            document.createElement("tr");


        linha.innerHTML = `

            <td>
                ${reserva.nome}
            </td>

            <td>
                ${reserva.telefone}
            </td>

            <td>
                ${reserva.data}
            </td>

            <td>
                ${reserva.passageiros}
            </td>

            <td>
                ${reserva.pagamento}
            </td>

        `;


        listaReservas.appendChild(linha);

    });

}