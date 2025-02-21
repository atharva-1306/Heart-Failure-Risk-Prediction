(function() {
    // Hide answers and loading spinner initially
    $('.answers').hide();
    $('.loading').hide();

    // Pre-fill form with default values
    $('#age').val('40');
    $('#gender').val('M');
    $('#familyhistory').val('N');
    $('#smoker').val('N');
    $('#exercise').val('60');
    $('#cholesterol').val('10');
    $('#bmi').val('20');
    $('#heartbeats').val('60');
    $('#palpitations').val('1');

    // Attach event listener for form submission
    $('#form').submit(function(event) {
        event.preventDefault(); // Prevent form from reloading
        calculateHeartRisk(); // Call local function
    });

    function calculateHeartRisk() {
        // Collect input values
        let age = parseInt($('#age').val());
        let gender = $('#gender').val();
        let familyHistory = $('#familyhistory').val();
        let smoker = $('#smoker').val();
        let exercise = parseInt($('#exercise').val());
        let cholesterol = parseInt($('#cholesterol').val());
        let bmi = parseFloat($('#bmi').val());
        let heartbeats = parseInt($('#heartbeats').val());
        let palpitations = parseInt($('#palpitations').val());

        // Show loading spinner
        $('.loading').show();
        $('.answers').hide();
        $('.classify-btn').prop('disabled', true);

        // Simple risk assessment logic
        let riskScore = 0;

        if (age > 50) riskScore += 2;
        if (familyHistory === "Y") riskScore += 2;
        if (smoker === "Y") riskScore += 3;
        if (exercise < 30) riskScore += 2; // Less than 30 mins per week
        if (cholesterol > 200) riskScore += 3;
        if (bmi > 30) riskScore += 2;
        if (heartbeats > 100) riskScore += 2;
        if (palpitations > 5) riskScore += 2;

        // Determine risk level
        let resultText = "";
        if (riskScore >= 8) {
            resultText = "High possibility of heart attack! Please consult a doctor.";
        } else if (riskScore >= 4) {
            resultText = "Moderate risk. Consider lifestyle changes and monitoring.";
        } else {
            resultText = "Low risk. Maintain a healthy lifestyle.";
        }

        // Display result
        $('.answer').text("Heart Attack Risk Assessment");
        $('.risk').text("Risk Score: " + riskScore);
        $('.prediction').text(resultText);

        // Hide loading spinner and show results
        $('.classify-btn').prop('disabled', false);
        $('.answers').show();
        $('.loading').hide();
    }
})();
