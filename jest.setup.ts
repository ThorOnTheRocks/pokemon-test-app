import * as crypto from 'crypto';

if (!crypto.randomUUID) {
  Object.defineProperty(crypto, 'randomUUID', {
    value: jest.fn(() => '1234'),
    configurable: true,
    enumerable: true,
    writable: true,
  });
}
