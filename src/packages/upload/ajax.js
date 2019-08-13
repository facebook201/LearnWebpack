/**
 * 上传文件的ajax 主要分为
 * 错误函数
 * 成功函数
 * 获取返回主要的信息体
 **/

function getError(action, option, xhr) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.status} ${XHR.response.error || xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.status} ${xhr.responseText}`;
  } else {
    msg = `fail to post ${action} ${xhr.status}`;
  }

  const err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody(xhr) {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  const xhr = new XMLHttpRequest();
  const action = option.action; // 地址

  if (xhr.upload) {
    // 进度函数
    xhr.upload.progress = function(e) {
      if (e.total > 0) {
        e.precent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  const formData = new FormData();
  // 可以有额外的参数
  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key]);
    });
  }
  formData.append(option.filename, option.file);

  // 错误回调
  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status > 300) {
      return option.onError(xhr.getError(action, option, xhr));
    }
    // 成功
    option.onSuccess(getBody(xhr));
  };

  xhr.open('post', action, true);
  // 跨域
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }
  const headers = option.headers || {};

  // 可以自己设置headers
  if (Object.keys(headers).length) {
    for (let item in headers) {
      if (headers.hasOwnProperty(item) && headers[item] !== null) {
        xhr.setRequestHeader(item, headers[item]);
      }
    }
  }
  xhr.send(formData);
  return xhr;
}
