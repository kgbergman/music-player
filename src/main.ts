import './style.css'
import OBR from "@owlbear-rodeo/sdk";
import { getImage } from "./images";
import { getPluginId } from "./getPluginId";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

let volumeState = "volume_full";

OBR.onReady(async () => {
  const playerRole = await OBR.player.getRole();
  if (playerRole === "GM") {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <head>
        <noscript>
          <style>
            /**
            * Reinstate scrolling for non-JS clients
            */
            .simplebar-content-wrapper {
              scrollbar-width: auto;
              -ms-overflow-style: auto;
            }

            .simplebar-content-wrapper::-webkit-scrollbar,
            .simplebar-hide-scrollbar::-webkit-scrollbar {
              display: initial;
              width: initial;
              height: initial;
            }
          </style>
        </noscript>
      </head>
      <div class="container">
        <div class="top-row">
          <div class="buttons-container">
          <div class="buttons">
            <div class="top-button">
              <img class="button-icon" id="openIcon" src="${getImage("close")}"/>
            </div>
            <div class="top-button">
              <img class="button-icon" id="saveIcon" src="${getImage("close")}"/>
            </div>
            <div class="top-button">
              <img class="button-icon" id=newStreamIcon" src="${getImage("close")}"/>
            </div>
            <div class="top-button">
              <img class="button-icon" id="newSceneIcon" src="${getImage("close")}"/>
            </div>
          </div>
          </div>
          <div class="tabs">
            <button class="tab-button" onclick="switchTab(0)">Tab 1</button>
            <button class="tab-button" onclick="switchTab(1)">Tab 2</button>
            <button class="tab-button" onclick="switchTab(2)">Tab 3</button>
          </div>
        </div>
        <div class="tab-content" id="tabContent" data-simplebar>
          <div class="grid">
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="stream">
              <div class="stream-box">
                <div class="stream-fade"></div>
                <div class="stream-high-row">
                  <div class="stream-volume-button-container">
                    <div class="stream-button">
                      <img class="stream-edit-icon" id="volumeIcon" src="${getImage(volumeState)}"/>
                    </div>
                  </div>
                  <div class="stream-volume-container">
                    <input type="range" min="0" max="100" value="50" class="stream-slider" id="playerSlider">
                  </div>
                </div>
                <p class="stream-icon">&#127754;</p>
                <div class="stream-low-row">
                  <div class="stream-name-container">
                    <span class="stream-name">Ocean</span>
                  </div>
                  <div class="stream-edit-button-container">
                    <div class="stream-button">
                      <svg class="stream-edit-icon" viewBox="0 0 24 24">
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
        <div id="linksContainer">
        <div class="link-input">
          <input type="text" class="link" placeholder="Enter YouTube link" />
          <button id="addButton">Add</button>
        </div>
        </div>
        <button id="playButton">Mix</button>
        <hr>
        <button style="visibility: hidden" id="playPauseButton">Play</button>
        <div>
          <img id="volumeIcon" src="${getImage(volumeState)}"/>
        </div>
        <div class="slidecontainer">
          <input type="range" min="0" max="100" value="50" class="slider" id="playerSlider">
        </div>
        <div id="mixPlayer"></div>
      -->
    `
  }
  else {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div>
        <div>
          <img id="volumeIcon" src="${getImage(volumeState)}"/>
        </div>
        <div class="slidecontainer">
          <input type="range" min="0" max="100" value="50" class="slider" id="playerSlider">
        </div>
        <div id="mixPlayer"></div>
      </div>
    `
  }

  const addButton = document.getElementById('addButton') as HTMLButtonElement;
  const playButton = document.getElementById('playButton') as HTMLButtonElement;
  const playPauseButton = document.getElementById('playPauseButton') as HTMLButtonElement;
  const volumeIcon = document.getElementById('volumeIcon') as HTMLImageElement;
  const linksContainer = document.getElementById('linksContainer') as HTMLDivElement;

  if (addButton) {
    addButton.addEventListener("click", () => addLink());
  }
  if (playButton) {
    playButton.addEventListener("click", () => playMix());
  }
  if (playPauseButton) {
    playPauseButton.addEventListener("click", () => playPauseAudio());
  }

  var slider = document.getElementById("playerSlider") as HTMLInputElement;

  const streams = document.querySelectorAll('.stream') as NodeListOf<HTMLDivElement>;
  if (streams) {
    streams.forEach(stream => {
      stream.addEventListener("click", (event) => {
        //Ignore if event is button or slider
        if (stream.style.borderColor === "rgb(187, 153, 255)") {
          stream.style.borderColor = "rgba(0, 0, 0, 0)";
        }
        else {
          stream.style.borderColor = "rgb(187, 153, 255)";
        }
      })
    })
  }

  if (slider) {
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      const level = parseInt(slider.value);
      console.log(level);
      if (level === 0) {
        volumeState = "volume_mute";
      }
      else if (level> 0 && level < 15) {
        volumeState = "volume_zero";
      }
      else if (level > 15 && level < 50) {
        volumeState = "volume_low";
      }
      else if (level > 50) {
        volumeState = "volume_full";
      }
      updateVolumeIcon();
      adjustVolumeMetadata(level);
    } 
  }

  function updateVolumeIcon() {
    volumeIcon.src = getImage(volumeState);
  }

  function addLink() {
    var linkInput = document.createElement('input');
    linkInput.type = 'text';
    linkInput.className = 'link';
    linkInput.placeholder = 'Enter YouTube link';
    linksContainer.appendChild(linkInput);
  }

  function playMix() {
    var audioUrls = getAudioUrls();
    if (audioUrls.length === 0) {
      alert('No YouTube links added.');
      return;
    }

    const mixPlayer = document.getElementById('mixPlayer');
    if (mixPlayer) {
      mixPlayer.innerHTML = "";
      audioUrls.forEach(videoTag => loadStreamMetadata(videoTag));
    }
    playPauseButton.style.visibility = "visible";
  }

  function loadStreamMetadata(videoTag: string) {
    console.log(loadStreamCmd);
    sendMetaData("loadStream", "", 0);
    sendMetaData("loadStream", videoTag, ++loadStreamCmd);
    console.log(loadStreamCmd);
  }

  function loadStream(videoTag: string) {
    console.log("loading", videoTag);
    const mixPlayer = document.getElementById('mixPlayer');
    const audioTag = document.createElement("audio") as HTMLAudioElement;
    //audioTag.style.display = "none";
    //audioTag.autoplay = true;
    audioTag.controls = true;
    audioTag.loop = true;
    fetch("https://images" + ~~(Math.random() * 33) + "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURIComponent("https://www.youtube.com/watch?hl=en&v=" + videoTag)).then(response => {
      if (response.ok) {
        response.text().then(data => {
          const regex = /(?:ytplayer\.config\s*=\s*|ytInitialPlayerResponse\s?=\s?)(.+?)(?:;var|;\(function|\)?;\s*if|;\s*if|;\s*ytplayer\.|;\s*<\/script)/gmsu;

          data.split('window.getPageData')[0];
          data = data.replace('ytInitialPlayerResponse = null', '');
          data = data.replace('ytInitialPlayerResponse=window.ytInitialPlayerResponse', '');
          data = data.replace('ytplayer.config={args:{raw_player_response:ytInitialPlayerResponse}};', '');
          
          const matches = regex.exec(data);
          const parsedData = matches && matches.length > 1 ? JSON.parse(matches[1]) : false;
          
          const streams: any[] = [];
          
          if (parsedData.streamingData) {
            if (parsedData.streamingData.adaptiveFormats) {
              streams.push(...parsedData.streamingData.adaptiveFormats);
            }
          
            if (parsedData.streamingData.formats) {
              streams.push(...parsedData.streamingData.formats);
            }
          } else {
            return false;
          }
          
          const audioStreams: { [key: string]: string } = {};
          
          streams.forEach((stream) => {
            const itag = stream.itag * 1;
            let quality: string | false = false;
            
            switch (itag) {
              case 139:
                quality = "48kbps";
                break;
              case 140:
                quality = "128kbps";
                break;
              case 141:
                quality = "256kbps";
                break;
            }
            console.log(stream);
            if (quality) audioStreams[quality] = stream.url;
          });

          audioTag.src = audioStreams['256kbps'] || audioStreams['128kbps'] || audioStreams['48kbps'];
          audioTag.id = videoTag;
          mixPlayer?.appendChild(audioTag);
        })
      }
    });
  }

  function playAudio(idToPlay: string) {
    const audioTags = document.querySelectorAll<HTMLAudioElement>("audio");
    console.log("playing", idToPlay);
    audioTags.forEach(audioTag => {
      if (audioTag.id === idToPlay) {
        audioTag.play();
      }
    });
    playPauseButton.innerHTML = "Pause";
  }

  function pauseAudio(idToPause: string) {
    const audioTags = document.querySelectorAll<HTMLAudioElement>("audio");
    console.log("pausing", idToPause);
    audioTags.forEach(audioTag => {
      if (audioTag.id === idToPause) {
        audioTag.pause();
      }
    });
    playPauseButton.innerHTML = "Play";
  }

  function playPauseAudio() {
    if (playPauseButton.innerHTML === "Play") {
      const audioTags = document.querySelectorAll<HTMLAudioElement>("audio");
      audioTags.forEach(audioTag => {
        sendMetaData("play", "", 0);
        sendMetaData("play", audioTag.id, ++playCmd);
      });
    }
    else {
      const audioTags = document.querySelectorAll<HTMLAudioElement>("audio");
      audioTags.forEach(audioTag => {
        sendMetaData("pause", "", 0);
        sendMetaData("pause", audioTag.id, ++pauseCmd);
      });
    }
  }

  function adjustVolume(volume: number) {
    const audioTags = document.querySelectorAll<HTMLAudioElement>("audio");
    audioTags.forEach(audioTag => {
      audioTag.volume = volume / 100;
    });
  }

  function adjustVolumeMetadata(volume: number) {
    sendMetaData("adjustVolume", "", 0);
    sendMetaData("adjustVolume", volume, ++adjustVolumeCmd);
  }

  function getAudioUrls() {
    var linkInputs = document.getElementsByClassName('link');
    var audioUrls = [];
    for (var i = 0; i < linkInputs.length; i++) {
      const thisInput = linkInputs[i] as HTMLInputElement;
      var url = parseVideoUrl(thisInput.value);
      if (url) {
        audioUrls.push(url);
      }
    }
    return audioUrls;
  }

  function parseVideoUrl(url: string) {
    var regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|https?:\/\/(?:www\.)?youtube\.com\/embed\/)([\w-]{11})(?:\S+)?/;
    var match = url.match(regex);
    return match ? match[1] : null;
  }

  let loadStreamCmd = 0;
  let playCmd = 0;
  let pauseCmd = 0;
  let adjustVolumeCmd = 0;
  function sendMetaData(command: string, parameter: any, cmdNum: number) {
    OBR.room.setMetadata({
      [getPluginId(command)]: [parameter, cmdNum]
    });
  }
  
  let prevLoadStreamCmd = -1;
  let prevPlayCmd = -1;
  let prevPauseCmd = -1;
  let prevAdjustVolumeCmd = -1;

  OBR.room.onMetadataChange((metadata) => {
    const loadStreamId = getPluginId("loadStream");
    const playId = getPluginId("play");
    const pauseId = getPluginId("pause");
    const adjustVolumeId = getPluginId("adjustVolume");
    const loadStreamMetadata = metadata[loadStreamId] as Array<any>;
    const playMetadata = metadata[playId] as Array<any>;
    const pauseMetadata = metadata[pauseId] as Array<any>;
    const adjustVolumeMetadata = metadata[adjustVolumeId] as Array<any>;
    console.log(loadStreamMetadata);
    if (loadStreamMetadata[1] !== prevLoadStreamCmd && loadStreamMetadata[0] !== "") {
      loadStream(loadStreamMetadata[0]);
      prevLoadStreamCmd = loadStreamMetadata[1];
    }
    if (playMetadata[1] !== prevPlayCmd && playMetadata[0] !== "") {
      playAudio(playMetadata[0]);
      prevPlayCmd = playMetadata[1];
    }
    if (pauseMetadata[1] !== prevPauseCmd && pauseMetadata[0] !== "") {
      pauseAudio(playMetadata[0]);
      prevPauseCmd = pauseMetadata[1];
    }
    if (adjustVolumeMetadata[1] !== prevAdjustVolumeCmd && adjustVolumeMetadata[0] !== "") {
      adjustVolume(adjustVolumeMetadata[0]);
      prevAdjustVolumeCmd = adjustVolumeMetadata[1];
    }
  });
});