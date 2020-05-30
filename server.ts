import {serve} from 'https://deno.land/std/http/server.ts'

// 在终端使用`deno run --allow-net server.ts`执行
const http = serve({port: 8208})
for await (const r of http) {
    r.respond({body: 'test'})
}
