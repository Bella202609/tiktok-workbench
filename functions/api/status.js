export async function onRequestGet({env}){return Response.json({ok:true,db:!!env.DB,configured:!!env.TIKTOK_SHOP_APP_KEY})}
