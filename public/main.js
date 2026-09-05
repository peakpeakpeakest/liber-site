function buildFinalLink() {
    var part1 = getPart2();
    var part2 = getPart3();
    var part3 = getPart4();
    return part1 + part2 + part3;
}

function setVideoLink() {
    var link = document.getElementById('videoLink');
    link.href = buildFinalLink();
}
