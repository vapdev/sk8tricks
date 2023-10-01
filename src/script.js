const skateboard = document.getElementById('skateboard');
const kickflip_button = document.getElementById('kickflip-button');
const varial_flip_button = document.getElementById('varial-kickflip-button');
const hardflip_button = document.getElementById('hardflip-button');
const bs_shove_it_360 = document.getElementById('bs-shove-it-360');
const bs_shove_it_180 = document.getElementById('bs-shove-it-180');
const fs_shove_it_360 = document.getElementById('fs-shove-it-360');
const fs_shove_it_180 = document.getElementById('fs-shove-it-180');
const treflip_button = document.getElementById('treflip-button');
const hardflip_360_button = document.getElementById('hardflip-360-button');
const heelflip_button = document.getElementById('heelflip-button');
const inward_heelflip_button = document.getElementById('inward-heelflip-button');
const inward_heelflip_360_button = document.getElementById('inward-heelflip-360-button');
const varial_heelflip_button = document.getElementById('varial-heelflip-button');
const laserflip_button = document.getElementById('laserflip-button');


const regularToggle = document.getElementById('regular-toggle');
const goofyToggle = document.getElementById('goofy-toggle');

regularToggle.addEventListener('change', () => {
    if (regularToggle.checked) {
        goofyToggle.checked = false;
    }
});

goofyToggle.addEventListener('change', () => {
    if (goofyToggle.checked) {
        regularToggle.checked = false;
    }
});

goofyToggle.addEventListener('change', () => {
    if (goofyToggle.checked) {
        // If the toggle is checked (turned on), apply opposite animations
        skateboard.classList.toggle('goofy', true);
        skateboard.classList.toggle('regular', false);
    } else {
        // If the toggle is unchecked (turned off), remove the goofy animations
        skateboard.classList.toggle('goofy', false);
        skateboard.classList.toggle('regular', true);
    }
});

regularToggle.addEventListener('change', () => {
    if (regularToggle.checked) {
        // If the toggle is checked (turned on), apply opposite animations
        skateboard.classList.toggle('goofy', false);
        skateboard.classList.toggle('regular', true);
    } else {
        // If the toggle is unchecked (turned off), remove the goofy animations
        skateboard.classList.toggle('goofy', true);
        skateboard.classList.toggle('regular', false);
    }
});

bs_shove_it_180.addEventListener('click', () => {
    skateboard.classList.add('bs-shove-it-180');
    setTimeout(() => {
        skateboard.classList.remove('bs-shove-it-180');
    }, 1000);
});

bs_shove_it_360.addEventListener('click', () => {
    skateboard.classList.add('bs-shove-it-360');
    setTimeout(() => {
        skateboard.classList.remove('bs-shove-it-360');
    }, 1000);
});

fs_shove_it_180.addEventListener('click', () => {
    skateboard.classList.add('fs-shove-it-180');
    setTimeout(() => {
        skateboard.classList.remove('fs-shove-it-180');
    }, 1000);
});

fs_shove_it_360.addEventListener('click', () => {
    skateboard.classList.add('fs-shove-it-360');
    setTimeout(() => {
        skateboard.classList.remove('fs-shove-it-360');
    }, 1000);
});

kickflip_button.addEventListener('click', () => {
    skateboard.classList.add('kickflip');
    setTimeout(() => {
        skateboard.classList.remove('kickflip');
    }, 1000);
});

varial_flip_button.addEventListener('click', () => {
    skateboard.classList.add('varial-kickflip');
    setTimeout(() => {
        skateboard.classList.remove('varial-kickflip');
    }, 1000);
});

hardflip_button.addEventListener('click', () => {
    skateboard.classList.add('hardflip');
    setTimeout(() => {
        skateboard.classList.remove('hardflip');
    }, 1000);
});

treflip_button.addEventListener('click', () => {
    skateboard.classList.add('treflip');
    setTimeout(() => {
        skateboard.classList.remove('treflip');
    }, 1000);
});

hardflip_360_button.addEventListener('click', () => {
    skateboard.classList.add('hardflip-360');
    setTimeout(() => {
        skateboard.classList.remove('hardflip-360');
    }, 1000);
});

heelflip_button.addEventListener('click', () => {
    skateboard.classList.add('heelflip');
    setTimeout(() => {
        skateboard.classList.remove('heelflip');
    }, 1000);
});

inward_heelflip_button.addEventListener('click', () => {
    skateboard.classList.add('inward-heelflip');
    setTimeout(() => {
        skateboard.classList.remove('inward-heelflip');
    }, 1000);
});

inward_heelflip_360_button.addEventListener('click', () => {
    skateboard.classList.add('inward-heelflip-360');
    setTimeout(() => {
        skateboard.classList.remove('inward-heelflip-360');
    }, 1000);
});

varial_heelflip_button.addEventListener('click', () => {
    skateboard.classList.add('varial-heelflip');
    setTimeout(() => {
        skateboard.classList.remove('varial-heelflip');
    }, 1000);
});

laserflip_button.addEventListener('click', () => {
    skateboard.classList.add('laserflip');
    setTimeout(() => {
        skateboard.classList.remove('laserflip');
    }, 1000);
});