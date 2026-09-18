// Mobile Sidebar Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function openSidebar() {
  mobileSidebar.classList.remove('translate-x-full');
  mobileSidebar.classList.add('translate-x-0');
  sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
  sidebarOverlay.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  mobileSidebar.classList.add('translate-x-full');
  mobileSidebar.classList.remove('translate-x-0');
  sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');
  sidebarOverlay.classList.remove('opacity-100');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Tutup sidebar saat klik link navigasi
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', closeSidebar);
});
