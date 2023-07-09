function calcularResultado() {
    var puntuacion = 0;

    // Pregunta 1
    var q1 = document.getElementsByName("q1");
    for (var i = 0; i < q1.length; i++) {
      if (q1[i].checked && q1[i].value === "d") {
        puntuacion++;
      }
    }

    // Pregunta 2
    var q2 = document.getElementsByName("q2");
    for (var j = 0; j < q2.length; j++) {
      if (q2[j].checked && q2[j].value === "a") {
        puntuacion++;
      }
    }

    // Pregunta 3
    var q3 = document.getElementsByName("q3");
    for (var j = 0; j < q3.length; j++) {
      if (q3[j].checked && q3[j].value === "c") {
        puntuacion++;
      }
    }

    // Pregunta 4
    var q4 = document.getElementsByName("q4");
    for (var j = 0; j < q4.length; j++) {
      if (q4[j].checked && q4[j].value === "d") {
        puntuacion++;
      }
    }

    // Pregunta 5
    var q5 = document.getElementsByName("q5");
    for (var j = 0; j < q3.length; j++) {
      if (q5[j].checked && q5[j].value === "a") {
        puntuacion++;
      }
    }

    // Pregunta 6
    var q6 = document.getElementsByName("q6");
    for (var j = 0; j < q6.length; j++) {
      if (q6[j].checked && q6[j].value === "d") {
        puntuacion++;
      }
    }

    // Pregunta 7
    var q7 = document.getElementsByName("q7");
    for (var j = 0; j < q7.length; j++) {
      if (q7[j].checked && q7[j].value === "b") {
        puntuacion++;
      }
    }

    // Mostrar resultado
    var resultadoDiv = document.getElementById("resultado");
    var puntuacionP = document.getElementById("puntuacion");
    puntuacionP.textContent = "Puntuación: " + puntuacion + " / 7";
    resultadoDiv.style.display = "block";

  }

// Cuestionario 2
  function calcularResultado2() {
    var puntuacion = 0;

    // Pregunta 1
    var q1 = document.getElementsByName("q1");
    for (var i = 0; i < q1.length; i++) {
      if (q1[i].checked && q1[i].value === "d") {
        puntuacion++;
      }
    }

    // Pregunta 2
    var q2 = document.getElementsByName("q2");
    for (var j = 0; j < q2.length; j++) {
      if (q2[j].checked && q2[j].value === "b") {
        puntuacion++;
      }
    }

    // Pregunta 3
    var q3 = document.getElementsByName("q3");
    for (var j = 0; j < q3.length; j++) {
      if (q3[j].checked && q3[j].value === "a") {
        puntuacion++;
      }
    }

    // Pregunta 4
    var q4 = document.getElementsByName("q4");
    for (var j = 0; j < q4.length; j++) {
      if (q4[j].checked && q4[j].value === "a") {
        puntuacion++;
      }
    }

    // Pregunta 5
    var q5 = document.getElementsByName("q5");
    for (var j = 0; j < q3.length; j++) {
      if (q5[j].checked && q5[j].value === "c") {
        puntuacion++;
      }
    }

    // Pregunta 6
    var q6 = document.getElementsByName("q6");
    for (var j = 0; j < q6.length; j++) {
      if (q6[j].checked && q6[j].value === "b") {
        puntuacion++;
      }
    }

    // Pregunta 7
    var q7 = document.getElementsByName("q7");
    for (var j = 0; j < q7.length; j++) {
      if (q7[j].checked && q7[j].value === "d") {
        puntuacion++;
      }
    }

    // Mostrar resultado
    var resultadoDiv = document.getElementById("resultado");
    var puntuacionP = document.getElementById("puntuacion");
    puntuacionP.textContent = "Puntuación: " + puntuacion + " / 7";
    resultadoDiv.style.display = "block";

  }