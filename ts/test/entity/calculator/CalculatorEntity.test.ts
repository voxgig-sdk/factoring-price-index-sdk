

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FactoringPriceIndexSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CalculatorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FACTORING_PRICE_INDEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('FACTORING_PRICE_INDEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FactoringPriceIndexSDK.test()
    const ent = testsdk.Calculator()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = FactoringPriceIndexSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Calculator().create({"advance":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FACTORING_PRICE_INDEX_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'calculator.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"advance":{"a":true,"h":"Advance","n":"advance","r":false,"sh":"Advance rate (% of each invoice paid up front)","t":"`$NUMBER`","key$":"advance","index$":0},"debtorDays":{"a":true,"h":"Debtor Days","n":"debtorDays","r":false,"sh":"Average days your customers take to pay","t":"`$NUMBER`","key$":"debtorDays","index$":1},"extras":{"a":true,"h":"Extras","n":"extras","r":false,"sh":"Other annual charges (audit, CHAPS, refactoring)","t":"`$NUMBER`","key$":"extras","index$":2},"margin":{"a":true,"h":"Margin","n":"margin","r":false,"sh":"Discount margin over base (%)","t":"`$NUMBER`","key$":"margin","index$":3},"minFee":{"a":true,"h":"Min Fee","n":"minFee","r":false,"sh":"Annual minimum fee in the agreement","t":"`$NUMBER`","key$":"minFee","index$":4},"serviceFee":{"a":true,"h":"Service Fee","n":"serviceFee","r":false,"sh":"Service fee (% of turnover)","t":"`$NUMBER`","key$":"serviceFee","index$":5},"turnover":{"a":true,"h":"Turnover","n":"turnover","r":false,"sh":"Annual turnover put through the facility","t":"`$NUMBER`","key$":"turnover","index$":6}},"name":"calculator","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["advance","debtorDays","extras","margin","minFee","serviceFee","turnover"],"co":{"id":"POST /mcp/tools/calculate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/calculate","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"calculate"}],"t":{"req":{"advance":"`reqdata.advance`","debtorDays":"`reqdata.debtor_day`","extras":"`reqdata.extra`","margin":"`reqdata.margin`","minFee":"`reqdata.min_fee`","serviceFee":"`reqdata.service_fee`","turnover":"`reqdata.turnover`"},"res":"`body`"},"index$":0},{"a":true,"bf":false,"co":{"id":"POST /mcp/tools/calculator_describe","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/calculator_describe","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"calculator_describe"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"calculator","name__orig":"calculator","Name":"Calculator","name_":"calculator","name-":"calculator","NAME":"CALCULATOR","index$":0}, {"active":true,"entity":"calculator","key$":"BasicCalculatorFlow","kind":"basic","name":"BasicCalculatorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"calculator_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Calculator', {"POST /mcp/tools/calculate":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"turnover":{"type":"number","description":"Annual turnover put through the facility","default":1000000,"key$":"turnover"},"serviceFee":{"type":"number","description":"Service fee (% of turnover)","default":1.5,"key$":"serviceFee"},"advance":{"type":"number","description":"Advance rate (% of each invoice paid up front)","default":85,"key$":"advance"},"debtorDays":{"type":"number","description":"Average days your customers take to pay","default":45,"key$":"debtorDays"},"margin":{"type":"number","description":"Discount margin over base (%)","default":3,"key$":"margin"},"minFee":{"type":"number","description":"Annual minimum fee in the agreement","default":0,"key$":"minFee"},"extras":{"type":"number","description":"Other annual charges (audit, CHAPS, refactoring)","default":0,"key$":"extras"}},"additionalProperties":false,"index$":1}}}},"parameters":[]},"POST /mcp/tools/calculator_describe":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{},"index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const calculator_ref01_ent = client.Calculator()
    let calculator_ref01_data = setup.data.new.calculator['calculator_ref01']

    calculator_ref01_data = (await calculator_ref01_ent.create(calculator_ref01_data)).data()
    assert(null != calculator_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/calculator/CalculatorTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FactoringPriceIndexSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['calculator01','calculator02','calculator03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FACTORING_PRICE_INDEX_TEST_CALCULATOR_ENTID': idmap,
    'FACTORING_PRICE_INDEX_TEST_LIVE': 'FALSE',
    'FACTORING_PRICE_INDEX_TEST_EXPLAIN': 'FALSE',
    'FACTORING_PRICE_INDEX_APIKEY': '',
  })

  idmap = env['FACTORING_PRICE_INDEX_TEST_CALCULATOR_ENTID']

  const live = 'TRUE' === env.FACTORING_PRICE_INDEX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FACTORING_PRICE_INDEX_TEST_CALCULATOR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FactoringPriceIndexSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.FACTORING_PRICE_INDEX_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FACTORING_PRICE_INDEX_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
