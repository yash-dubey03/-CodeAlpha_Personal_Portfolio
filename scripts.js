function toggleDetails(projectId) {
    const details = document.getElementById(projectId + '-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });
});
