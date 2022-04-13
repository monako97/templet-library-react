import type { MockConfiguration } from 'plugin-runtime';

const conf: MockConfiguration = {
  'POST /api/upload_file': (req, res) => {
    const { files } = req;

    const strBase64 = Buffer.from(files[0].buffer).toString('base64');

    const resp = {
      status: 200,
      message: '上传成功',
      result: 'data:image/jpeg;base64,' + strBase64,
    };

    res.status(resp.status).send(resp);
  },
  'POST /api/login_by_username': (req, res) => {
    const resp = {
      status: 200,
      message: '请求成功',
      result: {
        id: 1,
        password: req.body.password,
        status: 1,
        update_time: 1612553329000,
        username: req.body.username,
      },
    };

    res.status(resp.status).send(resp);
  },
};

export default conf;
