function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = [];
    var memberSkillsDisplay = document.getElementById("memberSkills");
    var memberSkillsDisplayText = "";

    for (var i = 0; i < member.length; i++) {
        if (member[i].selected) {
            memberSkills.push(member[i].value);
        }
    }

    for (var i = 0; i < memberSkills.length; i++) {
        memberSkillsDisplayText += memberSkills[i] + "<br>";
    }

    memberSkillsDisplay.innerHTML = memberSkillsDisplayText;
    document.getElementById("memberSkills").value = memberSkills;
}