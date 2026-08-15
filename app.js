/* ============================================================
   MELODIFY — Full-featured Spotify Clone
   Features: Search, Liked Songs, Create / Edit / Delete Playlists
============================================================ */

/* ===== SONG DATA ===== */
const SONGS = [
  {
    id: 1, title: "Mellinamae Mellinamae", artist: "Tamil Film Music",
    album: "Tamil Hits Vol. 1", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787398/Mellinamae_Mellinamae.mp3",
    emoji: "🎵", gradient: "linear-gradient(135deg,#1a3a2a,#0d2318)", accentColor: "#1db954", dateAdded: "Aug 10, 2026"
  },
  {
    id: 2, title: "Nee Kavithaigala", artist: "Tamil Melodies",
    album: "Romantic Collection", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786723008/Nee-Kavithaigala.mp3",
    emoji: "💕", gradient: "linear-gradient(135deg,#3a1a2a,#23080d)", accentColor: "#e91e8c", dateAdded: "Aug 11, 2026"
  },
  {
    id: 3, title: "Kaadhal En Kaviye", artist: "Mass Tamilan",
    album: "Love Anthology", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786723005/Kaadhal-En-Kaviye-MassTamilan.dev.mp3",
    emoji: "❤️", gradient: "linear-gradient(135deg,#3a2a1a,#231508)", accentColor: "#ff6b35", dateAdded: "Aug 12, 2026"
  },
  {
    id: 4, title: "Vennilave Vennilave", artist: "S. P. Balasubrahmanyam",
    album: "Minsara Kanavu", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786723020/Vennilave_Vennilave.mp3",
    emoji: "🌙", gradient: "linear-gradient(135deg,#1a2a3a,#080d23)", accentColor: "#4fc3f7", dateAdded: "Aug 15, 2026"
  },
  {
    id: 5, title: "Sundari Kannal", artist: "AR Rahman",
    album: "Thalapathi", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787408/Sundari-Kannal.mp3",
    emoji: "🌹", gradient: "linear-gradient(135deg,#3a1a1a,#230808)", accentColor: "#ff4081", dateAdded: "Aug 15, 2026"
  },
  {
    id: 6, title: "Mundhinam Parthene", artist: "AR Rahman",
    album: "Vinnaithaandi Varuvaayaa", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787397/Mundhinam-Parthene-MassTamilan.com.mp3",
    emoji: "🌸", gradient: "linear-gradient(135deg,#2a1a3a,#150823)", accentColor: "#ce93d8", dateAdded: "Aug 15, 2026"
  },
  {
    id: 7, title: "Enna Solla Pogirai", artist: "AR Rahman",
    album: "Kandukondain Kandukondain", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787390/Enna-Solla-Pogirai.mp3",
    emoji: "💙", gradient: "linear-gradient(135deg,#1a2a3a,#081523)", accentColor: "#29b6f6", dateAdded: "Aug 15, 2026"
  },
  {
    id: 8, title: "Maruvaarthai (Restrung)", artist: "Darbuka Siva",
    album: "Enai Noki Paayum Thota", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787380/Maruvaarthai-_Restrung-Version_-MassTamilan.com.mp3",
    emoji: "🎸", gradient: "linear-gradient(135deg,#1a3a38,#082320)", accentColor: "#26c6da", dateAdded: "Aug 15, 2026"
  },
  {
    id: 9, title: "Adiye", artist: "AR Rahman",
    album: "Kadal", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787368/Adiye-MassTamilan.fm.mp3",
    emoji: "🌊", gradient: "linear-gradient(135deg,#1a3a2e,#081f16)", accentColor: "#00e5a0", dateAdded: "Aug 15, 2026"
  },
  {
    id: 10, title: "Venmegam Pennaga", artist: "Tamil Classics",
    album: "Tamil Golden Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787364/Venmegam-Pennaga.mp3",
    emoji: "☁️", gradient: "linear-gradient(135deg,#252a3a,#0e1123)", accentColor: "#9fa8da", dateAdded: "Aug 15, 2026"
  },
  {
    id: 11, title: "Yamunai Aatrile", artist: "Tamil Classics",
    album: "Tamil Devotional Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786787349/Yamunai-Aatrile.mp3",
    emoji: "🏞️", gradient: "linear-gradient(135deg,#2a2a1a,#1a1a08)", accentColor: "#ffd54f", dateAdded: "Aug 15, 2026"
  },
  {
    id: 12, title: "Ennodu Nee Irundhal", artist: "AR Rahman",
    album: "I (Ai)", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797988/Ennodu-Nee-Irundhal.mp3",
    emoji: "🫀", gradient: "linear-gradient(135deg,#3a1a2a,#1f0d16)", accentColor: "#f06292", dateAdded: "Aug 15, 2026"
  },
  {
    id: 13, title: "Vazhithunaiye", artist: "Tamil Devotional",
    album: "Spiritual Melodies", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797985/Vazhithunaiye.mp3",
    emoji: "🙏", gradient: "linear-gradient(135deg,#2a1e3a,#160b23)", accentColor: "#b39ddb", dateAdded: "Aug 15, 2026"
  },
  {
    id: 14, title: "Kaadhalai Solla Mudiyatha", artist: "Mass Tamilan",
    album: "Love Collection", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797983/Kaadhalai-Solla-Mudiyatha-MassTamilan.fm.mp3",
    emoji: "💌", gradient: "linear-gradient(135deg,#3a2010,#231208)", accentColor: "#ff8a65", dateAdded: "Aug 15, 2026"
  },
  {
    id: 15, title: "Seemakaariye", artist: "Mass Tamilan",
    album: "Tamil Folk Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797976/Seemakaariye-MassTamilan.dev.mp3",
    emoji: "🌾", gradient: "linear-gradient(135deg,#1e3a1a,#0e2008)", accentColor: "#81c784", dateAdded: "Aug 15, 2026"
  },
  {
    id: 16, title: "Hey Penne", artist: "Tamil Film Music",
    album: "Tamil Beats", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797967/Hey-Penne.mp3",
    emoji: "🌺", gradient: "linear-gradient(135deg,#3a1535,#23082a)", accentColor: "#f48fb1", dateAdded: "Aug 15, 2026"
  },
  {
    id: 17, title: "Vaa Senthaazhini", artist: "Mass Tamilan",
    album: "Romantic Tamil", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797967/Vaa-Senthaazhini-MassTamilan.dev.mp3",
    emoji: "🌷", gradient: "linear-gradient(135deg,#3a1a30,#1f0818)", accentColor: "#e91e8c", dateAdded: "Aug 15, 2026"
  },
  {
    id: 18, title: "Kan Irrandil", artist: "Tamil Melodies",
    album: "Tamil Romantic Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797964/Kan-Irrandil.mp3",
    emoji: "👁️", gradient: "linear-gradient(135deg,#1a2a3a,#0a1520)", accentColor: "#4dd0e1", dateAdded: "Aug 15, 2026"
  },
  {
    id: 19, title: "Kurumugil", artist: "Mass Tamilan",
    album: "Tamil Classics Vol. 2", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786797961/Kurumugil-MassTamilan.dev.mp3",
    emoji: "🦚", gradient: "linear-gradient(135deg,#1a3a2a,#0a2218)", accentColor: "#4db6ac", dateAdded: "Aug 15, 2026"
  },
  {
    id: 20, title: "Kotha Raja", artist: "Mass Tamilan",
    album: "Tamil Hits Vol. 2", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803291/Kotha-Raja-MassTamilan.dev.mp3",
    emoji: "👑", gradient: "linear-gradient(135deg,#3a2a0a,#1f1600)", accentColor: "#ffd700", dateAdded: "Aug 15, 2026"
  },
  {
    id: 21, title: "Montagem Fearless (Ultra Slowed)", artist: "lirvie",
    album: "Slowed & Reverb", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803275/04_-_lirvie_-_MONTAGEM_FEARLESS_Ultra_Slowed.mp3",
    emoji: "😤", gradient: "linear-gradient(135deg,#2a0a3a,#150020)", accentColor: "#c084fc", dateAdded: "Aug 15, 2026"
  },
  {
    id: 22, title: "Montagem Alquimia (Slowed)", artist: "h6itam",
    album: "Slowed & Reverb", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803274/MONTAGEM_ALQUIMIA_SLOWED_-_h6itam_youtube.mp3",
    emoji: "⚗️", gradient: "linear-gradient(135deg,#0a2a3a,#001525)", accentColor: "#38bdf8", dateAdded: "Aug 15, 2026"
  },
  {
    id: 23, title: "Xonada Funk", artist: "Funk Brasil",
    album: "Funk Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803261/XONADA_FUNK.mp3",
    emoji: "🔥", gradient: "linear-gradient(135deg,#3a1a0a,#200d00)", accentColor: "#fb923c", dateAdded: "Aug 15, 2026"
  },
  {
    id: 24, title: "Montagem Sombra Estelar 10", artist: "DJ Rick 013 & Mc Vuk Vuk THZ",
    album: "Montagem Series", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803259/DJ_RICK_013_Mc_Vuk_Vuk_THZ_-_Montagem_sombra_estelar_10.mp3",
    emoji: "🌌", gradient: "linear-gradient(135deg,#0a0a2a,#000010)", accentColor: "#818cf8", dateAdded: "Aug 15, 2026"
  },
  {
    id: 25, title: "Montagem Delírio", artist: "Funk Brasil",
    album: "Funk Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803256/MONTAGEM_DEL%C3%8DRIO.mp3",
    emoji: "🌀", gradient: "linear-gradient(135deg,#2a0a2a,#150015)", accentColor: "#e879f9", dateAdded: "Aug 15, 2026"
  },
  {
    id: 26, title: "Montagem Bandido", artist: "Funk Brasil",
    album: "Funk Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803252/MONTAGEM_BANDIDO.mp3",
    emoji: "🖤", gradient: "linear-gradient(135deg,#1a1a1a,#0a0a0a)", accentColor: "#94a3b8", dateAdded: "Aug 15, 2026"
  },
  {
    id: 27, title: "Montagem Direção", artist: "Funk Brasil",
    album: "Funk Hits", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803250/Montagem_Dire%C3%A7%C3%A3o.mp3",
    emoji: "🚗", gradient: "linear-gradient(135deg,#1a2a0a,#0d1500)", accentColor: "#a3e635", dateAdded: "Aug 15, 2026"
  },
  {
    id: 28, title: "Montagem Unknown (Slowed)", artist: "AKXNESHIVA",
    album: "Slowed & Reverb", duration: 0,
    url: "https://res.cloudinary.com/udfcydnt/video/upload/v1786803248/MONTAGEM_UNKNOWN_Slowed_-_AKXNESHIVA_youtube.mp3",
    emoji: "👁️‍🗨️", gradient: "linear-gradient(135deg,#0a1a2a,#000a15)", accentColor: "#67e8f9", dateAdded: "Aug 15, 2026"
  }
];

/* ===== STATE ===== */
let state = {
  currentIndex: -1,
  isPlaying: false,
  isShuffle: false,
  repeatMode: 0,        // 0: off, 1: all, 2: one
  isMuted: false,
  volume: 0.7,
  likedSongs: new Set(),  // Set of song IDs (not indices)
  durations: {},
  playlists: [],          // [{id, name, emoji, songIds:[]}]
  currentView: 'home',
  activePlaylistId: null, // ID of the playlist currently open in view-playlist
  addToPlaylistSongId: null,  // song id pending modal
  selectedEmoji: '🎵',
  editSelectedEmoji: '🎵',
  currentQueue: SONGS,    // songs for the current active playback context
  searchQuery: ''
};

/* ===== AUDIO ===== */
const audio = document.getElementById('audio-player');
audio.volume = state.volume;

/* ===== UTILITY ===== */
function formatTime(secs) {
  if (!secs || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function getSongById(id) { return SONGS.find(s => s.id === id); }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ===== VIEW SWITCHING ===== */
function switchView(viewName) {
  state.currentView = viewName;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
  const el = document.getElementById(`view-${viewName}`);
  if (el) { el.classList.add('active-view'); document.getElementById('main-content').scrollTop = 0; }

  // Nav highlight
  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  const navMap = { home: 'nav-home', search: 'nav-search', library: 'nav-library' };
  if (navMap[viewName]) document.getElementById(navMap[viewName])?.classList.add('active');

  // Liked Songs item highlight
  document.getElementById('liked-songs-nav').classList.toggle('active', viewName === 'liked');
}

/* ===== RENDER HOME CARDS ===== */
function renderCards() {
  const grid = document.getElementById('songs-grid');
  const recentGrid = document.getElementById('recent-grid');
  grid.innerHTML = '';
  recentGrid.innerHTML = '';

  SONGS.forEach((song, i) => {
    grid.appendChild(createSongCard(song, i));
    recentGrid.appendChild(createSongCard(song, SONGS.length - 1 - i, true));
  });
}

function createSongCard(song, index, suffix = false) {
  const card = document.createElement('div');
  card.className = 'song-card';
  card.id = `card-${index}${suffix ? '-r' : ''}`;
  card.style.setProperty('--card-accent', song.accentColor);

  const isActive = state.currentIndex === index && state.isPlaying;
  card.innerHTML = `
    <div class="card-art-wrapper" style="background:${song.gradient}">
      <div class="card-art-placeholder">${song.emoji}</div>
      <button class="card-play-btn ${isActive ? 'playing' : ''}" data-index="${index}">
        ${isActive
          ? `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
          : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l15 8-15 8V4z"/></svg>`}
      </button>
    </div>
    <div class="card-title">${song.title}</div>
    <div class="card-subtitle">${song.artist}</div>
  `;

  if (state.currentIndex === index) card.classList.add('playing');

  card.addEventListener('click', e => {
    if (!e.target.closest('.card-play-btn')) playSong(index);
  });
  card.querySelector('.card-play-btn').addEventListener('click', e => {
    e.stopPropagation();
    state.currentIndex === index ? togglePlayPause() : playSong(index);
  });
  return card;
}

/* ===== RENDER TRACK LIST (HOME) ===== */
function renderTrackList() {
  const list = document.getElementById('track-list');
  list.innerHTML = '';
  SONGS.forEach((song, i) => {
    list.appendChild(createTrackRow(song, i, 'home'));
  });
}

function createTrackRow(song, displayIndex, context, contextIndex) {
  // context: 'home' | 'liked' | 'playlist' | 'search'
  // contextIndex: the numeric index for playback within that context
  const row = document.createElement('div');
  row.className = `track-item ${state.currentIndex === SONGS.indexOf(song) && context === 'home' ? 'active' : ''}`;

  // For liked / playlist / search, highlight if this song is currently playing
  if (context !== 'home') {
    const globalIdx = SONGS.indexOf(song);
    row.classList.toggle('active', globalIdx === state.currentIndex);
  }

  const songGlobalIndex = SONGS.indexOf(song);
  const dur = state.durations[songGlobalIndex] || 0;
  const isLiked = state.likedSongs.has(song.id);

  row.innerHTML = `
    <div class="track-num">
      <span>${displayIndex + 1}</span>
      <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6 4l15 8-15 8V4z"/></svg>
    </div>
    <div class="track-title-group">
      <div class="track-thumbnail" style="background:${song.gradient}">
        <span style="font-size:1.2rem">${song.emoji}</span>
      </div>
      <div class="track-title-text">
        <div class="track-name">${song.title}</div>
        <div class="track-artist">${song.artist}</div>
      </div>
    </div>
    <div class="track-album">${song.album}</div>
    <div class="track-date">${song.dateAdded}</div>
    <div class="track-actions">
      <button class="track-like-btn ${isLiked ? 'liked' : ''}" data-song-id="${song.id}" title="${isLiked ? 'Remove from Liked' : 'Like'}">
        <svg viewBox="0 0 24 24" fill="${isLiked ? song.accentColor : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <div class="track-duration">${formatTime(dur)}</div>
      <button class="track-add-btn" data-song-id="${song.id}" title="Add to playlist">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1z"/></svg>
      </button>
    </div>
  `;

  // Remove from playlist if context is 'playlist'
  if (context === 'playlist') {
    const removeBtn = document.createElement('button');
    removeBtn.className = 'track-remove-btn';
    removeBtn.title = 'Remove from playlist';
    removeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414z"/></svg>`;
    removeBtn.addEventListener('click', e => {
      e.stopPropagation();
      removeFromPlaylist(state.activePlaylistId, song.id);
    });
    row.querySelector('.track-actions').appendChild(removeBtn);
  }

  // Play on click
  row.addEventListener('click', e => {
    if (e.target.closest('.track-like-btn') || e.target.closest('.track-add-btn') || e.target.closest('.track-remove-btn')) return;
    playSong(songGlobalIndex);
  });

  // Like btn
  row.querySelector('.track-like-btn').addEventListener('click', e => {
    e.stopPropagation();
    toggleLikeBySongId(song.id);
  });

  // Add to playlist btn
  row.querySelector('.track-add-btn').addEventListener('click', e => {
    e.stopPropagation();
    openAddToPlaylistModal(song.id);
  });

  return row;
}

/* ===== PLAY SONG ===== */
function playSong(index) {
  if (index < 0 || index >= SONGS.length) return;
  state.currentIndex = index;
  state.isPlaying = true;

  const song = SONGS[index];
  audio.src = song.url;
  audio.play().catch(e => console.error('Play failed:', e));

  updatePlayerUI(song);
  updateAllUI();

  document.querySelector('.hero-section').style.background =
    `linear-gradient(180deg, ${song.accentColor}22 0%, transparent 100%)`;
}

function togglePlayPause() {
  if (state.currentIndex === -1) { playSong(0); return; }
  if (state.isPlaying) { audio.pause(); state.isPlaying = false; }
  else { audio.play(); state.isPlaying = true; }
  updatePlayPauseBtn();
  updateCardPlayButtons();
}

/* ===== PLAYER UI ===== */
function updatePlayerUI(song) {
  document.getElementById('player-song-name').textContent = song.title;
  document.getElementById('player-artist').textContent = song.artist;
  document.getElementById('player-thumb').innerHTML =
    `<div class="thumb-placeholder" style="background:${song.gradient}"><span style="font-size:1.8rem">${song.emoji}</span></div>`;

  document.getElementById('np-song-name').textContent = song.title;
  document.getElementById('np-artist').textContent = song.artist;
  document.getElementById('np-art').innerHTML =
    `<div style="width:100%;height:100%;background:${song.gradient};display:flex;align-items:center;justify-content:center;font-size:5rem">${song.emoji}</div>`;

  const liked = state.likedSongs.has(song.id);
  document.getElementById('heart-btn').classList.toggle('liked', liked);
  document.getElementById('np-like-btn').classList.toggle('liked', liked);
  const npLikeSvg = document.getElementById('np-like-btn').querySelector('svg');
  npLikeSvg.setAttribute('fill', liked ? song.accentColor : 'none');
  npLikeSvg.setAttribute('stroke', liked ? 'none' : 'currentColor');

  updatePlayPauseBtn();
}

function updatePlayPauseBtn() {
  const btn = document.getElementById('play-pause-btn');
  btn.querySelector('.icon-play').style.display = state.isPlaying ? 'none' : '';
  btn.querySelector('.icon-pause').style.display = state.isPlaying ? '' : 'none';
}

function updateCardPlayButtons() {
  document.querySelectorAll('.card-play-btn').forEach(btn => {
    const idx = parseInt(btn.dataset.index);
    const isActive = idx === state.currentIndex && state.isPlaying;
    btn.classList.toggle('playing', isActive);
    btn.innerHTML = isActive
      ? `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l15 8-15 8V4z"/></svg>`;
  });

  document.querySelectorAll('.song-card').forEach(card => card.classList.remove('playing'));
  if (state.currentIndex >= 0 && state.isPlaying) {
    document.querySelectorAll(`[id^="card-${state.currentIndex}"]`).forEach(c => c.classList.add('playing'));
  }
}

function updateAllUI() {
  updateCardPlayButtons();
  updateTrackListActive();
  renderQueue();
  // Re-render relevant view
  if (state.currentView === 'liked') renderLikedSongs();
  if (state.currentView === 'playlist') renderPlaylistView(state.activePlaylistId);
  if (state.currentView === 'search') performSearch(state.searchQuery);
}

function updateTrackListActive() {
  document.querySelectorAll('#track-list .track-item').forEach((row, i) => {
    row.classList.toggle('active', i === state.currentIndex);
  });
}

/* ===== PROGRESS ===== */
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const progressThumb = document.getElementById('progress-thumb');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${pct}%`;
  progressThumb.style.left = `${pct}%`;
  timeCurrent.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  timeTotal.textContent = formatTime(audio.duration);
  state.durations[state.currentIndex] = audio.duration;
  const dEl = document.querySelector(`#track-list .track-item:nth-child(${state.currentIndex + 1}) .track-duration`);
  if (dEl) dEl.textContent = formatTime(audio.duration);
});

let isDraggingProgress = false;
progressBar.addEventListener('mousedown', e => { isDraggingProgress = true; seekTo(e); });
document.addEventListener('mousemove', e => { if (isDraggingProgress) seekTo(e); });
document.addEventListener('mouseup', () => { isDraggingProgress = false; });

function seekTo(e) {
  const rect = progressBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  if (audio.duration) {
    audio.currentTime = pct * audio.duration;
    progressFill.style.width = `${pct * 100}%`;
    progressThumb.style.left = `${pct * 100}%`;
  }
}

/* ===== SONG ENDED ===== */
audio.addEventListener('ended', () => {
  if (state.repeatMode === 2) { audio.currentTime = 0; audio.play(); return; }
  let next = state.currentIndex + 1;
  if (state.isShuffle) next = Math.floor(Math.random() * SONGS.length);
  else if (next >= SONGS.length) {
    if (state.repeatMode === 1) next = 0;
    else { state.isPlaying = false; updatePlayPauseBtn(); updateCardPlayButtons(); return; }
  }
  playSong(next);
});

/* ===== CONTROLS ===== */
document.getElementById('play-pause-btn').addEventListener('click', togglePlayPause);

document.getElementById('next-btn').addEventListener('click', () => {
  let next = state.currentIndex + 1;
  if (state.isShuffle) next = Math.floor(Math.random() * SONGS.length);
  if (next >= SONGS.length) next = 0;
  playSong(next);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  let prev = state.currentIndex - 1;
  if (state.isShuffle) prev = Math.floor(Math.random() * SONGS.length);
  if (prev < 0) prev = SONGS.length - 1;
  playSong(prev);
});

document.getElementById('shuffle-btn').addEventListener('click', () => {
  state.isShuffle = !state.isShuffle;
  document.getElementById('shuffle-btn').classList.toggle('active', state.isShuffle);
});

document.getElementById('repeat-btn').addEventListener('click', () => {
  state.repeatMode = (state.repeatMode + 1) % 3;
  const btn = document.getElementById('repeat-btn');
  btn.classList.toggle('active', state.repeatMode > 0);
  btn.innerHTML = state.repeatMode === 2
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1l4 4-4 4V6H8c-1.103 0-2 .897-2 2v3H4V8c0-2.206 1.794-4 4-4h9V1zM7 23l-4-4 4-4v3h9c1.103 0 2-.897 2-2v-3h2v3c0 2.206-1.794 4-4 4H7v3z"/><text x="10" y="13" font-size="7" fill="currentColor" font-weight="bold">1</text></svg>`
    : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1l4 4-4 4V6H8c-1.103 0-2 .897-2 2v3H4V8c0-2.206 1.794-4 4-4h9V1zM7 23l-4-4 4-4v3h9c1.103 0 2-.897 2-2v-3h2v3c0 2.206-1.794 4-4 4H7v3z"/></svg>`;
});

/* ===== VOLUME ===== */
const volumeBar = document.getElementById('volume-bar');
const volumeFill = document.getElementById('volume-fill');
const volumeThumb = document.getElementById('volume-thumb');
let isDraggingVolume = false;

volumeBar.addEventListener('mousedown', e => { isDraggingVolume = true; setVolume(e); });
document.addEventListener('mousemove', e => { if (isDraggingVolume) setVolume(e); });
document.addEventListener('mouseup', () => { isDraggingVolume = false; });

function setVolume(e) {
  const rect = volumeBar.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  state.volume = pct;
  audio.volume = pct;
  volumeFill.style.width = `${pct * 100}%`;
  volumeThumb.style.left = `${pct * 100}%`;
  state.isMuted = pct === 0;
  updateMuteBtn();
}

document.getElementById('mute-btn').addEventListener('click', () => {
  state.isMuted = !state.isMuted;
  audio.muted = state.isMuted;
  updateMuteBtn();
});

function updateMuteBtn() {
  document.getElementById('mute-btn').querySelector('.icon-vol').style.display = state.isMuted ? 'none' : '';
  document.getElementById('mute-btn').querySelector('.icon-mute').style.display = state.isMuted ? '' : 'none';
}

/* ===== LIKED SONGS ===== */
function toggleLikeBySongId(songId) {
  const song = getSongById(songId);
  if (!song) return;

  if (state.likedSongs.has(songId)) {
    state.likedSongs.delete(songId);
    showToast(`Removed from Liked Songs`);
  } else {
    state.likedSongs.add(songId);
    showToast(`❤️ Added to Liked Songs`);
  }

  const liked = state.likedSongs.has(songId);
  updateLikedCountUI();

  // If this is the current song, update player buttons
  if (state.currentIndex >= 0 && SONGS[state.currentIndex].id === songId) {
    document.getElementById('heart-btn').classList.toggle('liked', liked);
    document.getElementById('np-like-btn').classList.toggle('liked', liked);
    const svg = document.getElementById('np-like-btn').querySelector('svg');
    svg.setAttribute('fill', liked ? song.accentColor : 'none');
    svg.setAttribute('stroke', liked ? 'none' : 'currentColor');
  }

  // Update all track-like-btns for this song
  document.querySelectorAll(`.track-like-btn[data-song-id="${songId}"]`).forEach(btn => {
    btn.classList.toggle('liked', liked);
    const svg = btn.querySelector('svg');
    svg.setAttribute('fill', liked ? song.accentColor : 'none');
  });

  // If currently viewing liked songs page, re-render
  if (state.currentView === 'liked') renderLikedSongs();
}

function updateLikedCountUI() {
  const count = state.likedSongs.size;
  document.getElementById('liked-count').textContent = `${count} song${count !== 1 ? 's' : ''}`;
  document.getElementById('liked-hero-meta').textContent = `${count} song${count !== 1 ? 's' : ''}`;
}

document.getElementById('heart-btn').addEventListener('click', () => {
  if (state.currentIndex >= 0) toggleLikeBySongId(SONGS[state.currentIndex].id);
});

document.getElementById('np-like-btn').addEventListener('click', () => {
  if (state.currentIndex >= 0) toggleLikeBySongId(SONGS[state.currentIndex].id);
});

/* ===== RENDER LIKED SONGS VIEW ===== */
function renderLikedSongs() {
  const list = document.getElementById('liked-track-list');
  const empty = document.getElementById('liked-empty');
  list.innerHTML = '';

  const liked = SONGS.filter(s => state.likedSongs.has(s.id));
  if (liked.length === 0) {
    empty.style.display = '';
    return;
  }
  empty.style.display = 'none';
  liked.forEach((song, i) => list.appendChild(createTrackRow(song, i, 'liked')));
}

/* ===== RENDER QUEUE ===== */
function renderQueue() {
  const queueList = document.getElementById('queue-list');
  queueList.innerHTML = '';
  SONGS.forEach((song, i) => {
    const item = document.createElement('div');
    item.className = `queue-item ${state.currentIndex === i ? 'active' : ''}`;
    item.innerHTML = `
      <div class="queue-thumb" style="background:${song.gradient}"><span>${song.emoji}</span></div>
      <div class="queue-info">
        <div class="queue-name">${song.title}</div>
        <div class="queue-artist">${song.artist}</div>
      </div>
    `;
    item.addEventListener('click', () => playSong(i));
    queueList.appendChild(item);
  });
}

/* ===== SEARCH ===== */
document.getElementById('search-input').addEventListener('input', e => {
  const q = e.target.value.trim();
  state.searchQuery = q;
  document.getElementById('search-clear-btn').style.display = q ? '' : 'none';

  if (q.length > 0) {
    switchView('search');
    performSearch(q);
  } else {
    document.getElementById('search-empty').style.display = '';
    document.getElementById('search-header').style.display = 'none';
    document.getElementById('search-results').innerHTML = '';
  }
});

document.getElementById('search-clear-btn').addEventListener('click', () => {
  document.getElementById('search-input').value = '';
  state.searchQuery = '';
  document.getElementById('search-clear-btn').style.display = 'none';
  document.getElementById('search-empty').style.display = '';
  document.getElementById('search-header').style.display = 'none';
  document.getElementById('search-results').innerHTML = '';
  switchView('home');
});

function performSearch(q) {
  const results = document.getElementById('search-results');
  const empty = document.getElementById('search-empty');
  const header = document.getElementById('search-header');
  results.innerHTML = '';

  if (!q) { empty.style.display = ''; header.style.display = 'none'; return; }

  const filtered = SONGS.filter(s =>
    s.title.toLowerCase().includes(q.toLowerCase()) ||
    s.artist.toLowerCase().includes(q.toLowerCase()) ||
    s.album.toLowerCase().includes(q.toLowerCase())
  );

  if (filtered.length === 0) {
    empty.style.display = '';
    empty.querySelector('.empty-title').textContent = 'No results found';
    empty.querySelector('.empty-sub').textContent = `No songs matching "${q}"`;
    header.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  header.style.display = 'grid';

  filtered.forEach((song, i) => {
    const globalIdx = SONGS.indexOf(song);
    results.appendChild(createTrackRow(song, i, 'search'));
  });
}

/* ===== LIBRARY VIEW ===== */
function renderLibrary() {
  const grid = document.getElementById('library-grid');
  grid.innerHTML = '';

  // Liked Songs card
  const likedCard = document.createElement('div');
  likedCard.className = 'library-card liked-card';
  likedCard.innerHTML = `
    <div class="library-card-art liked-art">❤️</div>
    <div class="library-card-info">
      <div class="library-card-name">Liked Songs</div>
      <div class="library-card-meta">${state.likedSongs.size} songs</div>
    </div>
    <div class="library-card-type">PLAYLIST</div>
  `;
  likedCard.addEventListener('click', () => { switchView('liked'); renderLikedSongs(); });
  grid.appendChild(likedCard);

  // User playlists
  state.playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = 'library-card';
    card.innerHTML = `
      <div class="library-card-art">${pl.emoji}</div>
      <div class="library-card-info">
        <div class="library-card-name">${pl.name}</div>
        <div class="library-card-meta">${pl.songIds.length} songs</div>
      </div>
      <div class="library-card-type">PLAYLIST</div>
    `;
    card.addEventListener('click', () => openPlaylistView(pl.id));
    grid.appendChild(card);
  });

  if (state.playlists.length === 0) {
    const hint = document.createElement('div');
    hint.className = 'library-empty-hint';
    hint.textContent = 'Create your first playlist with the + button above!';
    grid.appendChild(hint);
  }
}

/* ===== PLAYLISTS ===== */
let nextPlaylistId = 1;

function createPlaylist(name, emoji) {
  const pl = { id: nextPlaylistId++, name, emoji, songIds: [] };
  state.playlists.push(pl);
  renderSidebarPlaylists();
  renderLibrary();
  showToast(`✅ Playlist "${name}" created!`);
  return pl;
}

function renderSidebarPlaylists() {
  const list = document.getElementById('playlist-list');
  list.innerHTML = '';
  state.playlists.forEach(pl => {
    const li = document.createElement('li');
    li.className = 'playlist-item';
    li.dataset.playlistId = pl.id;
    if (state.activePlaylistId === pl.id) li.classList.add('active-playlist');
    li.textContent = `${pl.emoji} ${pl.name}`;
    li.addEventListener('click', () => openPlaylistView(pl.id));
    list.appendChild(li);
  });
}

function openPlaylistView(playlistId) {
  state.activePlaylistId = playlistId;
  switchView('playlist');
  renderPlaylistView(playlistId);
  renderSidebarPlaylists();
}

function renderPlaylistView(playlistId) {
  const pl = state.playlists.find(p => p.id === playlistId);
  if (!pl) return;

  document.getElementById('playlist-hero-art').textContent = pl.emoji;
  document.getElementById('playlist-hero-title').textContent = pl.name;
  document.getElementById('playlist-hero-meta').textContent = `${pl.songIds.length} song${pl.songIds.length !== 1 ? 's' : ''}`;

  const list = document.getElementById('playlist-track-list');
  const empty = document.getElementById('playlist-empty');
  list.innerHTML = '';

  if (pl.songIds.length === 0) {
    empty.style.display = '';
  } else {
    empty.style.display = 'none';
    pl.songIds.forEach((songId, i) => {
      const song = getSongById(songId);
      if (song) list.appendChild(createTrackRow(song, i, 'playlist'));
    });
  }

  // Render "Add Songs" grid — all songs not yet in playlist
  const addGrid = document.getElementById('add-songs-grid');
  addGrid.innerHTML = '';
  SONGS.forEach((song, i) => {
    if (pl.songIds.includes(song.id)) return;
    const card = document.createElement('div');
    card.className = 'add-song-card';
    card.innerHTML = `
      <div class="add-song-art" style="background:${song.gradient}">${song.emoji}</div>
      <div class="add-song-info">
        <div class="add-song-title">${song.title}</div>
        <div class="add-song-artist">${song.artist}</div>
      </div>
      <button class="add-song-btn" data-song-id="${song.id}" data-playlist-id="${pl.id}">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1z"/></svg>
        Add
      </button>
    `;
    card.querySelector('.add-song-btn').addEventListener('click', e => {
      e.stopPropagation();
      addToPlaylist(pl.id, song.id);
    });
    card.addEventListener('click', () => playSong(i));
    addGrid.appendChild(card);
  });
}

function addToPlaylist(playlistId, songId) {
  const pl = state.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  if (pl.songIds.includes(songId)) { showToast('Already in playlist!'); return; }
  pl.songIds.push(songId);
  const song = getSongById(songId);
  showToast(`Added "${song.title}" to ${pl.emoji} ${pl.name}`);
  if (state.currentView === 'playlist' && state.activePlaylistId === playlistId) {
    renderPlaylistView(playlistId);
  }
  renderSidebarPlaylists();
  renderLibrary();
}

function removeFromPlaylist(playlistId, songId) {
  const pl = state.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  pl.songIds = pl.songIds.filter(id => id !== songId);
  const song = getSongById(songId);
  showToast(`Removed "${song.title}" from playlist`);
  renderPlaylistView(playlistId);
  renderSidebarPlaylists();
  renderLibrary();
}

function deletePlaylist(playlistId) {
  const pl = state.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  if (!confirm(`Delete playlist "${pl.name}"? This cannot be undone.`)) return;
  state.playlists = state.playlists.filter(p => p.id !== playlistId);
  state.activePlaylistId = null;
  showToast(`Deleted playlist "${pl.name}"`);
  renderSidebarPlaylists();
  renderLibrary();
  switchView('library');
  renderLibrary();
}

/* ===== PLAYLIST HERO ACTIONS ===== */
document.getElementById('play-playlist-btn').addEventListener('click', () => {
  const pl = state.playlists.find(p => p.id === state.activePlaylistId);
  if (!pl || pl.songIds.length === 0) { showToast('Playlist is empty!'); return; }
  const firstSongId = pl.songIds[0];
  const idx = SONGS.findIndex(s => s.id === firstSongId);
  if (idx >= 0) playSong(idx);
});

document.getElementById('delete-playlist-btn').addEventListener('click', () => {
  if (state.activePlaylistId) deletePlaylist(state.activePlaylistId);
});

document.getElementById('edit-playlist-btn').addEventListener('click', () => {
  const pl = state.playlists.find(p => p.id === state.activePlaylistId);
  if (!pl) return;
  document.getElementById('edit-playlist-name-input').value = pl.name;
  state.editSelectedEmoji = pl.emoji;
  document.getElementById('edit-modal-art-preview').textContent = pl.emoji;
  document.querySelectorAll('#edit-emoji-picker .emoji-opt').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.emoji === pl.emoji);
  });
  openModal('edit-playlist-modal');
});

/* ===== MODALS ===== */
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

/* ---- Create Playlist Modal ---- */
document.getElementById('add-playlist-btn').addEventListener('click', () => {
  document.getElementById('playlist-name-input').value = '';
  state.selectedEmoji = '🎵';
  document.getElementById('modal-art-preview').textContent = '🎵';
  document.querySelectorAll('#emoji-picker .emoji-opt').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.emoji === '🎵');
  });
  openModal('create-playlist-modal');
});

document.getElementById('create-playlist-hero-btn').addEventListener('click', () => {
  document.getElementById('add-playlist-btn').click();
});

document.getElementById('close-create-modal').addEventListener('click', () => closeModal('create-playlist-modal'));
document.getElementById('cancel-create-modal').addEventListener('click', () => closeModal('create-playlist-modal'));

document.querySelectorAll('#emoji-picker .emoji-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('#emoji-picker .emoji-opt').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    state.selectedEmoji = opt.dataset.emoji;
    document.getElementById('modal-art-preview').textContent = opt.dataset.emoji;
  });
});

document.getElementById('confirm-create-playlist').addEventListener('click', () => {
  const name = document.getElementById('playlist-name-input').value.trim();
  if (!name) { document.getElementById('playlist-name-input').focus(); return; }
  createPlaylist(name, state.selectedEmoji);
  closeModal('create-playlist-modal');
});

/* ---- Edit Playlist Modal ---- */
document.getElementById('close-edit-modal').addEventListener('click', () => closeModal('edit-playlist-modal'));
document.getElementById('cancel-edit-modal').addEventListener('click', () => closeModal('edit-playlist-modal'));

document.querySelectorAll('#edit-emoji-picker .emoji-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('#edit-emoji-picker .emoji-opt').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    state.editSelectedEmoji = opt.dataset.emoji;
    document.getElementById('edit-modal-art-preview').textContent = opt.dataset.emoji;
  });
});

document.getElementById('confirm-edit-playlist').addEventListener('click', () => {
  const name = document.getElementById('edit-playlist-name-input').value.trim();
  if (!name) { document.getElementById('edit-playlist-name-input').focus(); return; }
  const pl = state.playlists.find(p => p.id === state.activePlaylistId);
  if (!pl) return;
  pl.name = name;
  pl.emoji = state.editSelectedEmoji;
  showToast(`✅ Playlist updated!`);
  closeModal('edit-playlist-modal');
  renderPlaylistView(state.activePlaylistId);
  renderSidebarPlaylists();
  renderLibrary();
});

/* ---- Add to Playlist Modal ---- */
document.getElementById('np-add-to-playlist-btn').addEventListener('click', () => {
  if (state.currentIndex >= 0) openAddToPlaylistModal(SONGS[state.currentIndex].id);
});

function openAddToPlaylistModal(songId) {
  state.addToPlaylistSongId = songId;
  const song = getSongById(songId);

  const infoEl = document.getElementById('adding-song-info');
  infoEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(255,255,255,.05);border-radius:8px;margin-bottom:16px">
      <div style="width:44px;height:44px;border-radius:6px;background:${song.gradient};display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0">${song.emoji}</div>
      <div>
        <div style="font-weight:700;font-size:.95rem">${song.title}</div>
        <div style="color:#b3b3b3;font-size:.8rem">${song.artist}</div>
      </div>
    </div>
  `;

  const selectList = document.getElementById('playlist-select-list');
  const noMsg = document.getElementById('no-playlists-msg');
  selectList.innerHTML = '';

  if (state.playlists.length === 0) {
    noMsg.style.display = '';
  } else {
    noMsg.style.display = 'none';
    state.playlists.forEach(pl => {
      const alreadyIn = pl.songIds.includes(songId);
      const row = document.createElement('div');
      row.className = `playlist-select-row ${alreadyIn ? 'already-added' : ''}`;
      row.innerHTML = `
        <div class="psr-art">${pl.emoji}</div>
        <div class="psr-info">
          <div class="psr-name">${pl.name}</div>
          <div class="psr-count">${pl.songIds.length} songs</div>
        </div>
        <div class="psr-check">${alreadyIn ? '✓' : '+'}</div>
      `;
      if (!alreadyIn) {
        row.addEventListener('click', () => {
          addToPlaylist(pl.id, songId);
          closeModal('add-to-playlist-modal');
        });
      }
      selectList.appendChild(row);
    });
  }

  openModal('add-to-playlist-modal');
}

document.getElementById('close-add-modal').addEventListener('click', () => closeModal('add-to-playlist-modal'));

/* ===== NAV ITEMS ===== */
document.getElementById('nav-home').addEventListener('click', () => switchView('home'));
document.getElementById('nav-search').addEventListener('click', () => {
  switchView('search');
  document.getElementById('search-input').focus();
});
document.getElementById('nav-library').addEventListener('click', () => {
  switchView('library');
  renderLibrary();
});
document.getElementById('liked-songs-nav').addEventListener('click', () => {
  switchView('liked');
  renderLikedSongs();
});

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  switch (e.code) {
    case 'Space': e.preventDefault(); togglePlayPause(); break;
    case 'ArrowRight':
      if (e.ctrlKey || e.metaKey) {
        let next = state.currentIndex + 1; if (next >= SONGS.length) next = 0; playSong(next);
      } else if (audio.duration) audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
      break;
    case 'ArrowLeft':
      if (e.ctrlKey || e.metaKey) {
        let prev = state.currentIndex - 1; if (prev < 0) prev = SONGS.length - 1; playSong(prev);
      } else audio.currentTime = Math.max(audio.currentTime - 10, 0);
      break;
    case 'ArrowUp':
      e.preventDefault(); state.volume = Math.min(1, state.volume + 0.05);
      audio.volume = state.volume; volumeFill.style.width = `${state.volume * 100}%`; volumeThumb.style.left = `${state.volume * 100}%`;
      break;
    case 'ArrowDown':
      e.preventDefault(); state.volume = Math.max(0, state.volume - 0.05);
      audio.volume = state.volume; volumeFill.style.width = `${state.volume * 100}%`; volumeThumb.style.left = `${state.volume * 100}%`;
      break;
    case 'KeyM': state.isMuted = !state.isMuted; audio.muted = state.isMuted; updateMuteBtn(); break;
  }
});

/* ===== GREETING ===== */
function updateGreeting() {
  const h = new Date().getHours();
  let g = h < 12 ? 'Good Morning 🌅' : h < 17 ? 'Good Afternoon ☀️' : h < 21 ? 'Good Evening 🌆' : 'Good Night 🌙';
  document.getElementById('hero-title').textContent = g;
}

/* ===== PRELOAD DURATIONS ===== */
function preloadDurations() {
  SONGS.forEach((song, i) => {
    const tmp = new Audio();
    tmp.preload = 'metadata';
    tmp.src = song.url;
    tmp.addEventListener('loadedmetadata', () => {
      state.durations[i] = tmp.duration;
      // Update any visible duration elements
      document.querySelectorAll(`[data-song-id="${song.id}"]`).forEach(btn => {
        const row = btn.closest('.track-item');
        if (row) {
          const dur = row.querySelector('.track-duration');
          if (dur) dur.textContent = formatTime(tmp.duration);
        }
      });
    });
  });
}

/* ===== INIT ===== */
function init() {
  updateGreeting();
  renderCards();
  renderTrackList();
  renderQueue();
  renderSidebarPlaylists();
  renderLibrary();
  preloadDurations();
  document.getElementById('search-clear-btn').style.display = 'none';
  updateLikedCountUI();
}

init();
