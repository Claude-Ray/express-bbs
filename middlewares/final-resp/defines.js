'use strict';

const base = [
  {statusCode: 200, succeed: true, code: 200, status: 'success', desc: 'success'},
  {statusCode: 500, succeed: false, code: 500, status: 'failure', desc: 'failure'},
  {statusCode: 404, succeed: true, code: 404, status: 'notFound', desc: 'api does not exist'},
  {statusCode: 403, succeed: true, code: 403, status: 'noAuth', desc: 'permission denied'}
];

const statusToCode = {};
const codeToStatus = {};

base.forEach(item => {
  statusToCode[item.status] = codeToStatus[item.code] = item;
});

module.exports = {
  statusToCode,
  codeToStatus
};
