import test from 'node:test';
import assert from 'node:assert/strict';
import { collectIconNames } from '../src/lib/icon-names.ts';

test('只枚举可调用的图标，排除新版索引与其它资源分类', () => {
  const ArrowLeft = () => {};
  const Avatar = () => {};
  const resources = {
    ArrowLeft, Avatar,
    iconsByCollection: { phosphor: { ArrowLeft } },
    iconsByDefault: { ArrowLeft },
    componentNames: { avatars: ['Avatar'] },
    icons: { ArrowLeft },
    version: '1.0.31', missing: null,
  };
  assert.deepEqual(collectIconNames(resources, { avatars: ['Avatar'] }), ['ArrowLeft']);
});

test('兼容旧版函数及 class 组件并保持稳定排序', () => {
  assert.deepEqual(collectIconNames({ ZIcon: class {}, AIcon: () => {} }, {}), ['AIcon', 'ZIcon']);
  assert.deepEqual(collectIconNames({}, {}), []);
});
