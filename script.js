const questions = {

    
 "Wendeschützschaltung": [

        { 
            type: "textWithImage",
            question: "Wofür werden Wendeschützschaltungen eigentlich eingesetzt?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Um den Motor zunächst in einer Drehrichtung in Stern- und dann andersherum im Dreieck laufen zu lassen", "Um die Drehrichtung des Motors zu ändern", "Um eine höhere Drehzahl zu erreichen"], 
            correct: [0] 
        },

        { 
            type: "textWithImage",
            question: "Beim Überprüfen der Drehrichtung stellen Sie fest, dass die Motorwelle sich immer nur in einer Richtung dreht. Wählen Sie aus, was Ihrer Meinung nach falsch gemacht wurde!", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Das andere Wendeschütz wurde vergessen", "Ein- und abgangsseitig wurden beide Schütze identisch verdrahtet", "Die Phasenfolge U1, V1 und W1 am Motorklemmbrett wurde vertauscht"], 
            correct: [1] 
        },

        { 
            type: "textWithImage",
            question: "Nach dem Einschaltes des Hauptschalters zieht einer der Schütze nach Betätigung eines Tasters an, fällt aber ab, sobald Sie diesen loslassen. Wo liegt der mögliche Verdrahtungsfehler?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der Kontakt mit der Koordinate E8 von Q3 wurde als NC ausgeführt", "Die Anschlüsse A1 beider Schütze wurde vertauscht", "Der Selbsthaltekontakt von Q3 wurde vergessen"], 
            correct: [2] 
        },

        { 
            type: "textWithImage",
            question: "Nach dem Einschaltes des Hauptschalters, zieht einer ihrer Schütze nach Betätigung eines Tasters an, fällt wieder ab und zieht wieder an usw., während Sie den Taster gedrückt halten. Was könnte die Fehlerursache sein?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der Taster S0 wurde überbrückt", "Der Kontakt mit der Koordinate G6 wurde als NC von Q3 verdrahtet", "S1 und S2 wurden vertauscht"], 
            correct: [1] 
        },

        { 
            type: "textWithImage",
            question: "Bei der Inbetriebnahme scheint alles zu funktionieren. Der Motor dreht wie gewünscht in beide Richtungen. Nachdem Sie den Motor entsprechend der Vorgaben allerdings mit dem Lastmoment belasten, löst der MCB aus. Was kann Ursache dafür sein?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Die Einstellung am MCB für den Motornennstrom ist falsch", "Der MCB ist für die Maschine nicht ausgelegt", "Die Einstellung am MCB richtet sich nach der Leerlaufbelastung des Motors und muss darauf eingestellt werden"], 
            correct: [0, 1, 2] 
        },

        { 
            type: "textWithImage",
            question: "Bei der Inbetriebnahme geht gar nichts mehr. Obwohl Sie den Hauptschalter und alle anderen Betriebsmittel eingeschaltet haben, tut sich nichts. Welche Fehler könnten dafür verantwortlich sein?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der Steuerkontakt von Q2 und F2 wurden vertauscht", "Die Brücke zwischen SF0 und S0 wurde vergessen", "Die N-Leiterbrücke fehlt und der N in Richtung A2 der Schütze ist an die falsche N-Durchgangsklemme angeschlossen"], 
            correct: [1, 2] 
        },

        { 
            type: "textWithImage",
            question: "Der Kontakt im Steuerstromkreis mit der Koordinate E12 wurde statt als NO von Q4 als NO von Q3 verdrahtet. Welche Auswirkungen können eintreten?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Je nach Toleranzen der Schaltkontakte von Q3 kann bei Betätigung von S1 Q3 ganz normal anziehen und der Motor dreht rechts herum", "Wird zuerst S2 für Linkslauf betätigt, funktioniert die Selbsthaltung von Q4 nicht. Der Motor geht aus, sobald S2 losgelassen wird", "Schließen beispielsweise die NOs von Q3 eher, als das seine NCs öffnen, kommt es zu einem 2-poligem Leiterschluss im Hauptstromkreis zwischen L1 und L3"], 
            correct: [1] 
        },

        { 
            type: "textWithImage",
            question: "Eim Einbschalten durch die entsprechenden Taster stellen Sie fest, dass beide Schütze leicht brummen und scheinbar nicht korrekt anziehen. Was könnte hier falsch gelaufen sein?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Beide Schütze sind defekt", "Die Betriebsspannung für die Schützspulen ist zu gering", "Die Belastung an der Motorwelle ist zu hoch"], 
            correct: [1] 
        },

        { 
            type: "textWithImage",
            question: "Bei der Inbetriebnahme funktioniert der Steuerstromkreis tadellos. Nachdem Sie allerdings die Sicherungen für den Hauptstromkreis einschalten und S1 drücken, 'knallt' es. Welcher Fehler kann hier vorliegen?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Die Charakteristik der LS-Schalter wurde falsch gewählt", "Eingangsseitig wurden die Schütze falsch verdrahtet", "Die Selbsthaltekontakte von Q3 und Q4 wurden abgangsseitig verbunden"], 
            correct: [0, 2] 
        },

        { 
            type: "textWithImage",
            question: "Obwohl alles (scheinbar) korrekt verdrahtet wurde, lässt sich der Steuerstromkreis nicht einschalten. Was vermuten Sie?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Der NOT-Aus wurde vergessen zu entriegeln", "Die Ader des 230 V-Abgangs wurde nicht abisoliert und hat keinen galvanischen Kontakt zum Fußkontakt der Sicherung", "Der Motorschutzschalter (MCB wurde falsch eingestellt"], 
            correct: [0, 1] 
        },

        { 
            type: "textWithImage",
            question: "Der Motor lässt sich nicht in Betrieb nehmen, obwohl Steuer- und Hauptstromkreis aktiviert sind und 400 V an den Reihenklemmen anliegen. Welche Ursache vermuten Sie?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Lag bereits eine Auslösung vor, kann bei MCB's, die durch drücken aktiviert werden, ein manuelles Aus- und Wiedereinschalten das Problem lösen", "Bei billigen Schützen, die bereits unter Fehlerbedingungen gearbeitet haben, kann es zu Problemen mit den Hauptkontakten kommen, sodass die Leistungskontakte nicht mehr schließen, wenn der Anker der Schützspule anzieht", "Die NH-Sicherung im Hausanschlusskasten hatte beim letzten Probelauf ausgelöst"], 
            correct: [0, 1] 
        },

        { 
            type: "textWithImage",
            question: "Welche Information liefert Ihnen die Angabe 'PTC' auf dem Motortypenschild?", 
            image: "Bilder Querbeet/bild5.jpg", 
            answers: ["Es handelt sich um eine Angabe der Betriebsart des Motos", "Der Motor verfügt über temperaturabhängige Sensoren zur Überwachung", "Der Motor ist ein Asynchronmotor"], 
            correct: [1] 
        },

    ]

};


const categoryNames = Object.keys(questions);
const BLINK_DURATION = 1200; // Zeit in Millisekunden 

let currentCategory = '';
let score = 0;
let questionIndex = 0;
let categoryQuestions = [];
let selectedAnswers = [];
let multiChoiceTimer = null;
let startTime;


function disableCompletedCategories() {
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(button => {
        const category = button.getAttribute('data-category');
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            if (progressData.questionIndex >= questions[category].length) {
                button.disabled = true;
                button.classList.add('completed'); // Klasse zum Ausgrauen
            }
        }
    });
}


function saveProgress() {
    const progressData = {
        questionIndex: questionIndex,
        score: score,
        selectedAnswers: selectedAnswers,
    };
    localStorage.setItem(`progress_${currentCategory}`, JSON.stringify(progressData));
    console.log(`Progress gespeichert für ${currentCategory}:`, progressData); // Debug
}

// Fortschritt laden
function loadProgress(category) {
    const savedData = localStorage.getItem(`progress_${category}`);
    if (savedData) {
        const progressData = JSON.parse(savedData);
        return progressData;
    }
    return { questionIndex: 0, score: 0, selectedAnswers: [] };
}

function loadCategory(category) {

    const introImage = document.getElementById('intro-image');
    if (introImage) {
        introImage.style.display = 'none';
    }
    saveProgress(); // Den aktuellen Fortschritt speichern, bevor die Kategorie gewechselt wird
    const allCategoryButtons = document.querySelectorAll('.category-btn');
    allCategoryButtons.forEach(btn => {
        if (!btn.classList.contains('answer-btn')) {
            btn.classList.remove('selected');
        }
    });

    const selectedButton = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    currentCategory = category;
    const progress = loadProgress(category);
    score = progress.score;
    questionIndex = progress.questionIndex;
    selectedAnswers = progress.selectedAnswers || [];
    categoryQuestions = questions[category];

    document.getElementById('score-container').style.display = 'none';
    multiChoiceTimer = null;
    startTime = new Date();

    displayQuestion();
}

function calculateMedal(percentage) {
    if (percentage === 100) return "Platin"; // Genau 100% -> Platin
    if (percentage >= 92) return "Gold"; // 99% bis 92% -> Gold
    if (percentage >= 81) return "Silber"; // 91% bis 81% -> Silber
    if (percentage >= 67) return "Bronze"; // 80% bis 67% -> Bronze
    return null; // Unter 67% -> Keine Medaille
}

function getMedalImage(medal) {
    if (medal === "Platin") {
        return "Medailien/Platin.jpg"; // Neuer Bildpfad für Platin
    } else if (medal === "Gold") {
        return "Medailien/Gold.jpg";
    } else if (medal === "Silber") {
        return "Medailien/Silber.jpg";
    } else if (medal === "Bronze") {
        return "Medailien/Bronze.jpg";
    }
    return null;
}

function pointsNeededForNextMedal(percentage, totalQuestions) {
    if (percentage < 67) return Math.ceil((67 - percentage) / 100 * totalQuestions); // Punkte bis Bronze
    if (percentage < 81) return Math.ceil((81 - percentage) / 100 * totalQuestions); // Punkte bis Silber
    if (percentage < 92) return Math.ceil((92 - percentage) / 100 * totalQuestions); // Punkte bis Gold
    if (percentage < 100) return Math.ceil((100 - percentage) / 100 * totalQuestions); // Punkte bis Platin
    return 0; // Platin bereits erreicht
}

function calculateGrade(percentage) {
    if (percentage >= 92) {
        return "Sehr gut"; // 100 - 92 Punkte -> Gold
    } else if (percentage >= 81) {
        return "Gut"; // 91 - 81 Punkte -> Silber
    } else if (percentage >= 67) {
        return "Befriedigend"; // 80 - 67 Punkte -> Bronze
    } else if (percentage >= 50) {
        return "Ausreichend"; // 66 - 50 Punkte
    } else if (percentage >= 30) {
        return "Mangelhaft"; // 49 - 30 Punkte
    } else {
        return "Ungenügend"; // 29 - 0 Punkte
    }
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    if (questionIndex >= categoryQuestions.length) {
        displayScore();
        saveProgress();
        disableCompletedCategories();
        if (allCategoriesCompleted()) {
            showOverallResultButton();
        }
        return;
    }

    const questionData = categoryQuestions[questionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    // Frage-Nummer anzeigen
    const questionNumber = document.createElement('div');
    questionNumber.classList.add('question-number');
    questionNumber.innerHTML = `Frage ${questionIndex + 1} von ${categoryQuestions.length}`;
    questionElement.appendChild(questionNumber);

    const questionTitle = document.createElement('h3');
    questionTitle.innerHTML = questionData.question;
    questionElement.appendChild(questionTitle);

    if (questionData.type === 'textWithImage') {
        const imageElement = document.createElement('img');
        imageElement.src = questionData.image;
        imageElement.classList.add('question-image');
        questionElement.appendChild(imageElement);
    }

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    questionData.answers.forEach((answer, answerIndex) => {
        const answerButton = document.createElement('button');
        answerButton.innerHTML = answer;
        answerButton.classList.add('answer-btn');

        if (selectedAnswers.includes(answerIndex)) {
            answerButton.classList.add('selected');
        }

        answerButton.onclick = function () {
            handleAnswerClick(answerIndex, answerButton);
        };

        answersContainer.appendChild(answerButton);
    });

    questionElement.appendChild(answersContainer);
    questionContainer.appendChild(questionElement);

    // Container für die Buttons (Reset und Weiter/Auswertung)
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '10px';

    // Reset-Button (mit richtiger Klasse)
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.classList.add('reset-btn');
    resetButton.onclick = function () {
        if (confirm('Möchten Sie wirklich alles zurücksetzen? Alle Fortschritte gehen verloren.')) {
            clearProgress(); // Fortschritte löschen und Seite neu laden
        }
    };

    buttonContainer.appendChild(resetButton);

    // Weiter/Auswertungs-Button
    const nextButton = document.createElement('button');
    nextButton.textContent = questionIndex >= categoryQuestions.length - 1 ? 'Auswertung' : 'Weiter';
    nextButton.classList.add('next-btn');
    nextButton.onclick = function () {
    if (selectedAnswers.length === 0) {
        nextButton.disabled = true; // Keine Aktion, wenn keine Auswahl getroffen wurde
        return;
    }

    // Deaktiviere den Button, sobald er geklickt wurde
    nextButton.disabled = true;

    // Fortschritt speichern
    saveProgress();

    // Antwort-Buttons deaktivieren während des Feedbacks
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');
    answerButtons.forEach(button => {
        button.disabled = true;
        button.style.pointerEvents = 'none'; // Mausinteraktionen deaktivieren
    });

    // Feedback anzeigen (grün oder rot blinken lassen)
    evaluateAnswers();

    // Nach Feedback: Nächste Frage oder Ergebnis laden
    setTimeout(() => {
        questionIndex++;
        selectedAnswers = [];
        if (questionIndex >= categoryQuestions.length) {
            displayScore(); // Ergebnisse anzeigen
            saveProgress(); // Fortschritt speichern
            disableCompletedCategories(); // Kategorien deaktivieren
            if (allCategoriesCompleted()) {
                showOverallResultButton();
            }
        } else {
            displayQuestion(); // Nächste Frage anzeigen
        }
    }, 1200); // Wartezeit für Blink-Effekte (Feedback)
};

    buttonContainer.appendChild(nextButton);

    questionContainer.appendChild(buttonContainer);
}


function blinkCorrectAnswers(correctIndices) {
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');
    
    answerButtons.forEach((button, index) => {
        if (correctIndices.includes(index)) {
            // Nur Text grün blinken
            const textSpan = button.querySelector('span') || document.createElement('span');
            textSpan.textContent = button.textContent;
            textSpan.classList.add('text-blink-correct');
            button.innerHTML = '';
            button.appendChild(textSpan);
        }
    });

    setTimeout(() => {
        answerButtons.forEach(button => {
            // Originaltext wiederherstellen
            const textSpan = button.querySelector('span');
            if (textSpan) {
                button.textContent = textSpan.textContent;
            }
        });
}, BLINK_DURATION); // <--- Verwendet die zentrale Blinkzeit
}

function evaluateAnswers() {
    const questionData = categoryQuestions[questionIndex];
    const correctAnswers = questionData.correct;

    // 1. Prüfen, ob die Antworten korrekt sind
    const isCorrect = arraysEqualIgnoreOrder(selectedAnswers, correctAnswers);

    // 2. Interaktionen deaktivieren, um Punkte-Spamming zu verhindern
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');
    answerButtons.forEach(button => {
        button.disabled = true; // Deaktivieren
        button.style.pointerEvents = 'none'; // Zusätzliche Sicherheitsmaßnahme
    });

    // 3. Feedback anzeigen (Blinkeffekte für korrekte und falsche Antworten)
    if (isCorrect) {
        score++; // Punkte nur für 1 richtige Auswahl erhöhen
        blinkCorrectAnswers(correctAnswers); // Grünes Blinken
    } else {
        // Falsche Antworten dem Fehlerbericht hinzufügen
        fehlerhafteFragen.push({
            frage: questionData.question,
            falsch: selectedAnswers.map(i => questionData.answers?.[i]),
            richtig: correctAnswers.map(i => questionData.answers?.[i])
        });
        blinkSelectedIncorrectAnswers(correctAnswers); // Rotes Blinken
    }
}


function handleAnswerClick(answerIndex, answerElement) {
    if (selectedAnswers.includes(answerIndex)) {
        const indexToRemove = selectedAnswers.indexOf(answerIndex);
        selectedAnswers.splice(indexToRemove, 1);
        answerElement.classList.remove('selected', 'image-selected', 'image-incorrect');
    } else {
        selectedAnswers.push(answerIndex);
        answerElement.classList.add('selected', 'image-selected');
    }

    // Wenn mindestens eine Auswahl getroffen wurde, aktiviere den "Weiter" Button
    if (selectedAnswers.length > 0) {
        document.querySelector('.next-btn').disabled = false;
    } else {
        document.querySelector('.next-btn').disabled = true;
    }
}


function arraysEqualIgnoreOrder(a, b) {
    if (a.length !== b.length) return false;
    let sortedA = a.slice().sort();
    let sortedB = b.slice().sort();
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }
    return true;
}

function updateTempFeedback(message) {
    let questionContainer = document.getElementById('question-container');
    let tempFeedback = document.getElementById('temp-feedback');
    if (!tempFeedback) {
        tempFeedback = document.createElement('div');
        tempFeedback.id = 'temp-feedback';
        tempFeedback.classList.add('feedback');
        questionContainer.appendChild(tempFeedback);
    }
    tempFeedback.textContent = message;
}

function removeTempFeedback() {
    let tempFeedback = document.getElementById('temp-feedback');
    if (tempFeedback) {
        tempFeedback.remove();
    }
}

function displayScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score-container';
    scoreContainer.style.display = 'block';
    scoreContainer.style.position = 'relative';
    scoreContainer.style.top = '20px';
    scoreContainer.style.textAlign = 'center';

    const correctAnswers = score;
    const wrongAnswers = categoryQuestions.length - score;
    const percentage = Math.round((correctAnswers / categoryQuestions.length) * 100);
    const grade = calculateGrade(percentage);

    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';
    chartContainer.style.maxWidth = '400px';
    chartContainer.style.margin = 'auto';
    chartContainer.style.textAlign = 'center';

    if (correctAnswers > 0) {
        const correctBar = document.createElement('div');
        correctBar.classList.add('correct-bar');
        correctBar.style.width = "50%";
        correctBar.textContent = `Richtig: ${correctAnswers}`;
        chartContainer.appendChild(correctBar);
    }

    if (wrongAnswers > 0) {
        const wrongBar = document.createElement('div');
        wrongBar.classList.add('wrong-bar');
        wrongBar.style.width = "50%";
        wrongBar.textContent = `Falsch: ${wrongAnswers}`;
        chartContainer.appendChild(wrongBar);
    }

    const percentageText = document.createElement('p');
    percentageText.textContent = `Erfolgsquote: ${percentage}%`;
    scoreContainer.appendChild(chartContainer);
    scoreContainer.appendChild(percentageText);

    const gradeText = document.createElement('p');
    gradeText.textContent = `Note: ${grade}`;
    scoreContainer.appendChild(gradeText);

    // Füge Fehlerbericht für die aktuelle Kategorie hinzu
    displayCategoryErrorReport();

    // Nur wenn alle Kategorien abgeschlossen sind, "Zurück zum Start"-Button anzeigen
    if (allCategoriesCompleted()) {
	/*
        const startButton = document.createElement('button');
        startButton.textContent = 'Zurück zum Start';
        startButton.classList.add('start-btn');
        startButton.onclick = clearProgress; // Funktion zum Zurücksetzen des Fortschritts
        questionContainer.appendChild(startButton);
	*/

        const overallResultButton = document.createElement('button');
        overallResultButton.textContent = 'Gesamtübersicht';
        overallResultButton.id = 'overall-result-btn';
        overallResultButton.className = 'overall-result-btn'; // Existierende CSS-Klasse anwenden
        overallResultButton.onclick = displayOverallScore;
        questionContainer.appendChild(overallResultButton);
    }

    questionContainer.appendChild(scoreContainer);
}

function displayCategoryErrorReport() {
    const questionContainer = document.getElementById('question-container');

    const errorTitle = document.createElement('h2');
    errorTitle.textContent = `Fehlerbericht für Kategorie ${currentCategory}`;
    errorTitle.style.textAlign = 'center';
    questionContainer.appendChild(errorTitle);

    if (fehlerhafteFragen.length === 0) {
        const noErrorsMessage = document.createElement('p');
        noErrorsMessage.textContent = "Herzlichen Glückwunsch! Du hast in dieser Kategorie keine Fehler gemacht.";
        noErrorsMessage.style.textAlign = 'center';
        questionContainer.appendChild(noErrorsMessage);
    } else {
        const errorList = document.createElement('div');
        errorList.classList.add('error-list');

        fehlerhafteFragen.forEach((eintrag, index) => {
            const errorItem = document.createElement('div');
            errorItem.classList.add('feedback-question');

            const questionText = document.createElement('p');
            questionText.innerHTML = `<strong>Frage ${index + 1}:</strong> ${eintrag.frage}`;
            errorItem.appendChild(questionText);

            const userAnswerText = document.createElement('p');
            userAnswerText.innerHTML = `<strong>Deine Antwort:</strong> <span class="wrong-answer">${eintrag.falsch.join(", ")}</span>`;
            errorItem.appendChild(userAnswerText);

            const correctAnswerText = document.createElement('p');
            correctAnswerText.innerHTML = `<strong>Richtige Antwort:</strong> <span class="correct-answer">${eintrag.richtig.join(", ")}</span>`;
            errorItem.appendChild(correctAnswerText);

            errorList.appendChild(errorItem);
        });

        questionContainer.appendChild(errorList);
    }

    // Reset-Button wurde entfernt, da dieser nur in der Gesamtauswertung angezeigt werden soll
}

function displayOverallScore() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const categoryContainer = document.getElementById('category-container');
    if (categoryContainer) {
        categoryContainer.style.display = 'none';
    }

    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    categoryNames.forEach(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            totalCorrectAnswers += progressData.score;
            totalQuestions += questions[category].length;
        }
    });

    const percentage = Math.round((totalCorrectAnswers / totalQuestions) * 100);
    const grade = calculateGrade(percentage);
    const medal = calculateMedal(percentage);

    const finalScoreContainer = document.createElement('div');
    finalScoreContainer.id = 'final-score-container';
    finalScoreContainer.style.margin = '30px auto';
    finalScoreContainer.style.padding = '20px';
    finalScoreContainer.style.backgroundColor = '#f0f8ff';
    finalScoreContainer.style.border = '2px solid #ccc';
    finalScoreContainer.style.borderRadius = '10px';
    finalScoreContainer.style.textAlign = 'center';

    const title = document.createElement('h3');
    title.textContent = 'Gesamtergebnis aus allen Kategorien';
    finalScoreContainer.appendChild(title);

    const summaryText = document.createElement('p');
    summaryText.textContent = `Erfolgsquote: ${percentage}% | Note: ${grade}`;
    finalScoreContainer.appendChild(summaryText);

    // Sound-Logik (nur bei Platin) - OHNE AUTOPLAY
    if (medal === 'Platin') {
        const platinSound = new Audio('Die Flippers.mp3');
        
        // Sound-Button
        const soundButton = document.createElement('button');
        soundButton.textContent = '🎉 Sound abspielen';
        soundButton.className = 'sound-btn';
        soundButton.onclick = () => {
            platinSound.currentTime = 0; // Zurücksetzen
            platinSound.play().catch(e => console.log("Sound-Fehler:", e));
        };
        finalScoreContainer.appendChild(soundButton);
    }

    if (medal) {
        const medalText = document.createElement('p');
        if (medal === 'Platin') {
            medalText.innerHTML = 'Hervorragend! <br>Alles richtig!';
            medalText.style.color = '#d1567d';
        } else if (medal === 'Gold') {
            medalText.textContent = 'Sehr gut! Gold für Dich!';
            medalText.style.color = '#ffd700';
        } else if (medal === 'Silber') {
            medalText.textContent = 'Prima! Silber für Dich!';
            medalText.style.color = '#c0c0c0';
        } else if (medal === 'Bronze') {
            medalText.textContent = 'Glückwunsch! Bronze für Dich!';
            medalText.style.color = '#cd7f32';
        }
        medalText.style.fontSize = '18px';
        medalText.style.fontWeight = 'bold';
        finalScoreContainer.appendChild(medalText);

        const medalImage = document.createElement('img');
        medalImage.src = getMedalImage(medal);
        medalImage.classList.add('medal-image', 'dynamic');
        finalScoreContainer.appendChild(medalImage);
    } else {
        const missingPoints = pointsNeededForNextMedal(percentage, totalQuestions);
        const missingPointsText = document.createElement('p');
        missingPointsText.textContent = `Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
        finalScoreContainer.appendChild(missingPointsText);
    }

    questionContainer.appendChild(finalScoreContainer);

    // Zurück-zum-Start-Button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Zurück zum Start';
    resetButton.classList.add('reset-btn');
    resetButton.style.marginTop = '20px';
    resetButton.style.display = 'block';
    resetButton.style.margin = '10px auto';
    resetButton.style.padding = '10px 20px';
    resetButton.style.fontSize = '16px';
    resetButton.onclick = clearProgress;
    questionContainer.appendChild(resetButton);
}

function showOverallResultButton() {
    const questionContainer = document.getElementById('question-container');
    if (!document.getElementById('overall-result-btn')) {
        const overallResultButton = document.createElement('button');
        overallResultButton.textContent = 'Gesamtübersicht';
        overallResultButton.id = 'overall-result-btn';
        overallResultButton.className = 'overall-result-btn'; // Existierende CSS-Klasse anwenden
        overallResultButton.onclick = function() {
            displayOverallScore();
        };
        questionContainer.appendChild(overallResultButton);
    }
}

function allCategoriesCompleted() {
    return categoryNames.every(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            return progressData.questionIndex >= questions[category].length;
        }
        return false;
    });
}

function shuffleCategories() {
    for (let i = categoryNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [categoryNames[i], categoryNames[j]] = [categoryNames[j], categoryNames[i]];
    }
}

function checkAllCategoriesCompleted() {
    const allCompleted = allCategoriesCompleted(); // Überprüfen, ob alle Kategorien abgeschlossen sind

    if (allCompleted) {
        // "Gesamtübersicht"-Button hinzufügen
        const categoryContainer = document.getElementById('category-container');
        if (!document.getElementById('overall-result-btn')) { // Nur hinzufügen, wenn der Button fehlt
            const overallResultButton = document.createElement('button');
            overallResultButton.textContent = 'Gesamtübersicht';
            overallResultButton.id = 'overall-result-btn';
            overallResultButton.classList.add('overall-result-btn'); // Optional für Styling
            overallResultButton.onclick = displayOverallScore; // Führt zur Gesamtübersicht
            categoryContainer.appendChild(overallResultButton);
        }
    }

    disableCompletedCategories(); // Deaktive abgeschlossene Kategorien
}

function confirmCategorySwitch(newCategory) {
    if (questionIndex === 0 || questionIndex >= categoryQuestions.length) {
        loadCategory(newCategory);
        return;
    }
    saveProgress();
    const progressPercentage = Math.round((questionIndex / categoryQuestions.length) * 100);
    const scorePercentage = questionIndex > 0 ? Math.round((score / questionIndex) * 100) : 0;
    const confirmationMessage = `Du hast ${progressPercentage}% der Aufgaben bearbeitet und bis jetzt ein Ergebnis von ${scorePercentage}% erreicht.\n\nMöchtest du wirklich die Kategorie wechseln?`;

    if (confirm(confirmationMessage)) {
        loadCategory(newCategory);
    }
}

function loadCategories() {
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = '';
    categoryNames.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.classList.add('category-btn');
        categoryButton.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryButton.setAttribute('data-category', category);
        categoryButton.onclick = () => confirmCategorySwitch(category);
        categoryContainer.appendChild(categoryButton);
    });
}

function clearProgress() {
    localStorage.clear();
    location.reload();
}

function renderErrorReport(targetElement = document.body) {
    targetElement.innerHTML = ''; // Inhalt löschen

    const title = document.createElement("h2");
    title.textContent = "Fehlerbericht";
    title.style.textAlign = "center";
    targetElement.appendChild(title);

    if (fehlerhafteFragen.length === 0) {
        const noErrors = document.createElement("p");
        noErrors.textContent = "Herzlichen Glückwunsch! Du hast keine Fehler gemacht.";
        noErrors.style.textAlign = "center";
        targetElement.appendChild(noErrors);
    } else {
        const errorList = document.createElement("ul");

        fehlerhafteFragen.forEach((eintrag, index) => {
            const errorItem = document.createElement("li");

            errorItem.innerHTML = `
                <strong>${index + 1}. ${eintrag.frage}</strong><br>
                Deine Antwort: <span style="color: red;">${eintrag.falsch}</span><br>
                Richtige Antwort: <span style="color: green;">${eintrag.richtig}</span>
            `;

            errorList.appendChild(errorItem);
        });

        targetElement.appendChild(errorList);
    }

    const backButton = document.createElement("button");
    backButton.textContent = "Zurück zum Start";
    backButton.onclick = clearProgress;
    targetElement.appendChild(backButton);
}


let fehlerhafteFragen = [];

function speichereFehlversuch(frage, ausgewaehlteAntwort, richtigeAntwort) {
    fehlerhafteFragen.push({
        frage: frage,
        falsch: ausgewaehlteAntwort,
        richtig: richtigeAntwort
    });
}





function blinkSelectedIncorrectAnswers(correctAnswers) {
    const answerButtons = document.querySelectorAll('.answer-btn, .answer-img');

    answerButtons.forEach((button, index) => {
        // Nur Text rot blinken lassen (kein Rahmen!)
        const textSpan = button.querySelector('span') || document.createElement('span');
        textSpan.textContent = button.textContent;
        textSpan.classList.add('text-blink-wrong');
        button.innerHTML = '';
        button.appendChild(textSpan);
    });

    setTimeout(() => {
        answerButtons.forEach(button => {
            // Originaltext wiederherstellen
            const textSpan = button.querySelector('span');
            if (textSpan) {
                button.textContent = textSpan.textContent;
            }
        });
}, BLINK_DURATION); // <--- Verwendet die zentrale Blinkzeit
}

function displayFinalOverallScore() {
    const questionContainer = document.getElementById('question-container');
    
    let totalCorrectAnswers = 0;
    let totalQuestions = 0;

    categoryNames.forEach(category => {
        const savedData = localStorage.getItem(`progress_${category}`);
        if (savedData) {
            const progressData = JSON.parse(savedData);
            totalCorrectAnswers += progressData.score;
            totalQuestions += questions[category].length;
        }
    });

    // Berechnung der Gesamtbewertung
    const percentage = Math.round((totalCorrectAnswers / totalQuestions) * 100);
    const grade = calculateGrade(percentage);
    const medal = calculateMedal(percentage);

    const finalScoreContainer = document.createElement('div');
    finalScoreContainer.id = 'final-score-container';
    finalScoreContainer.style.margin = '30px auto';
    finalScoreContainer.style.padding = '20px';
    finalScoreContainer.style.backgroundColor = '#f0f8ff'; // Farblich anderer Hintergrund
    finalScoreContainer.style.border = '2px solid #ccc';
    finalScoreContainer.style.borderRadius = '10px';
    finalScoreContainer.style.textAlign = 'center';

    const title = document.createElement('h3');
    title.textContent = 'Gesamtergebnis aus allen Kategorien';
    finalScoreContainer.appendChild(title);

    const summaryText = document.createElement('p');
    summaryText.textContent = `Erfolgsquote: ${percentage}% | Note: ${grade}`;
    finalScoreContainer.appendChild(summaryText);

    if (medal) {
        const medalText = document.createElement('p');
        if (medal === 'Platin') {
            medalText.innerHTML = 'HERVORRAGEND! Du hast ALLES richtig beantwortet!';
            medalText.style.color = '#4CAF50'; // Grün für hervorragende Leistung
            medalText.style.fontSize = '18px';
            medalText.style.fontWeight = 'bold';
            finalScoreContainer.appendChild(medalText);

            // Daumen hoch Bild
            const medalImage = document.createElement('img');
            medalImage.src = 'Daumen.jpg'; // Daumen-Bild, sicherstellen, dass dieses Bild existiert
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);

            // Musik: Audio-Element einfügen
            const audio = document.createElement('audio');
            audio.src = 'belohnung.mp3'; // Der relative Pfad zur Audiodatei
            audio.type = 'audio/mpeg'; // Dateityp
            audio.autoplay = true; // Startet die Musik automatisch
            finalScoreContainer.appendChild(audio); // Audio in den DOM einfügen
        } else if (medal === 'Gold') {
            medalText.textContent = 'Sehr gut! Du hast Gold!';
            medalText.style.color = '#FFD700'; // Gold-Farbe
            finalScoreContainer.appendChild(medalText);
            const medalImage = document.createElement('img');
            medalImage.src = getMedalImage(medal); // Bildpfad dynamisch aufrufen
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);
        } else if (medal === 'Silber') {
            medalText.textContent = 'Gut! Du hast Silber!';
            medalText.style.color = '#C0C0C0'; // Silber-Farbe
            finalScoreContainer.appendChild(medalText);
            const medalImage = document.createElement('img');
            medalImage.src = getMedalImage(medal); // Bildpfad dynamisch aufrufen
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);
        } else if (medal === 'Bronze') {
            medalText.textContent = 'Gut! Du hast Bronze!';
            medalText.style.color = '#CD7F32'; // Bronze-Farbe
            finalScoreContainer.appendChild(medalText);
            const medalImage = document.createElement('img');
            medalImage.src = getMedalImage(medal); // Bildpfad dynamisch aufrufen
            medalImage.className = 'medal-image';
            finalScoreContainer.appendChild(medalImage);
        }
    } else {
        const missingPoints = pointsNeededForNextMedal(percentage, totalQuestions);
        const missingPointsText = document.createElement('p');
        missingPointsText.textContent = `Dir fehlen noch ${missingPoints} richtige Antworten, um eine Medaille zu erhalten.`;
        finalScoreContainer.appendChild(missingPointsText);
    }

    questionContainer.appendChild(finalScoreContainer);

    // "Zurück zum Start"-Button
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Zurück zum Start';
    resetButton.onclick = clearProgress; 
    questionContainer.appendChild(resetButton); 
}

window.onload = function () {
    loadCategories(); // Kategorien laden
    checkAllCategoriesCompleted(); // Überprüfung: Sind alle Kategorien abgeschlossen?

    // Fortschritt der aktuellen Kategorie wiederherstellen
    if (currentCategory) {
        const progress = loadProgress(currentCategory);
        questionIndex = progress.questionIndex;
        score = progress.score;
        selectedAnswers = progress.selectedAnswers || [];
        displayQuestion(); // Zeigt die letzte Frage
    }
};
