/**
 * Triggers a text file download.
 *
 * @param {unknown} data
 * @param {string} [fileName]
 * @param {string} [type]
 */
function download(data, fileName, type) {
  let fileExt = '.txt';

  if (data && typeof data === 'object') {
    try {
      data = JSON.stringify(data, null, 2);
      fileExt = '.json';
    } catch (err) {
      data = '' + data;
    }
  } else {
    data = '' + data;
  }

  if (!fileName) fileName = 'download' + fileExt;
  if (!type) type = 'text/plain';

  const blob = new Blob([data], { type });
  const anchorEl = document.createElement('a');

  anchorEl.setAttribute('download', fileName);
  anchorEl.setAttribute('href', URL.createObjectURL(blob));
  anchorEl.dispatchEvent(new MouseEvent('click'));
}
