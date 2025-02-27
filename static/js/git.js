/*  static/js/git.js
 *  handles any git api integrations.
 */

const repoOwner = "bashful-sh";
const repoName = "bashful";
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}`;
const setElement = (id, text) => document.getElementById(id).textContent = ` ${text}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(
      "%c Github API Status: %c Good ",
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #6f6; color: #000; padding: 4px; border-radius: 2px; margin-left: 1ch;`
    );
    console.log(data);
    const starCount = data.stargazers_count;
    const watcherCount = data.watchers_count;
    const forkCount = data.forks_count;
    const lastUpdate = new Date(data.updated_at);
    setElement("star-count", starCount);
    setElement("watcher-count", watcherCount);
    setElement("fork-count", forkCount);
    setElement("last-updated", lastUpdate.toLocaleString());
  })
  .catch(error => {
    console.log(
      "%c Github API Status: %c Bad",
      `background: #ddd; color: #000; padding: 4px; border-radius: 2px;`,
      `background: #f66; color: #000; padding: 4px; border-radius: 2px;`,
      `margin-left: 1ch;`
    );
    console.error("Error fetching repo info:", error);
    setElement("star-count", "n/a");
    setElement("watcher-count", "n/a");
    setElement("fork-count", "n/a");
    setElement("last-updated", "n/a");
  });
