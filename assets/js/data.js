window.KDK_DATA={today:'2026-09-17',subscriptions:[],templates:[
{id:1,type:'WhatsApp',name:'renewal_7_days',product:'Spectrum',status:'Approved',content:'Hello {{customer_name}}, your {{product}} subscription expires on {{plan_end_date}}. Please renew to continue services.'},
{id:2,type:'WhatsApp',name:'gst_renewal_3_days',product:'ExpressGST',status:'Approved',content:'Reminder: Your ExpressGST plan expires in 3 days on {{plan_end_date}}.'},
{id:3,type:'Email',name:'spectrum_renewal',product:'Spectrum',status:'Active',subject:'Your Spectrum subscription renewal',content:'Dear {{customer_name}},\n\nYour Spectrum plan is approaching renewal. Plan End Date: {{plan_end_date}}.'},
{id:4,type:'Email',name:'pdfsigner_renewal',product:'PDF Signer',status:'Active',subject:'PDF Signer renewal reminder',content:'Dear {{customer_name}},\n\nYour PDF Signer subscription expires on {{plan_end_date}}.'}
],campaigns:[{id:101,name:'September Renewal Journey',products:['Spectrum','ExpressGST','ZenTDS','PDF Signer'],triggers:[15,7,3,1],channels:['WhatsApp','Email'],time:'10:00',status:'Scheduled'}],history:[
{date:'2026-09-16',campaign:'September Renewal Journey',channel:'WhatsApp',count:18,status:'Delivered'},
{date:'2026-09-16',campaign:'September Renewal Journey',channel:'Email',count:16,status:'Opened'}]};
const names=['Aarav Mehta','Neha Sharma','Rohan Gupta','Priya Verma','Vikram Singh','Ananya Jain','Karan Malhotra','Meera Kapoor','Rahul Bansal','Isha Arora','Dev Khanna','Simran Kaur','Arjun Kapoor','Kavya Rao','Nitin Shah','Riya Jain','Aditya Mehta','Pooja Verma','Sahil Gupta','Tanvi Singh'];
const products=['Spectrum','ExpressGST','ZenTDS','PDF Signer'];const offsets=[1,3,7,15,22,30,-1,-3];
function addDays(d,n){let x=new Date(d+'T00:00:00');x.setDate(x.getDate()+n);return x.toISOString().slice(0,10)}
for(let i=0;i<50;i++){let off=offsets[i%offsets.length],renewed=i%13===0;KDK_DATA.subscriptions.push({id:5000+i,name:names[i%names.length],customerId:'KDK'+String(10001+i),product:products[i%4],plan:products[i%4]+' Professional',end:addDays(KDK_DATA.today,off),status:renewed?'Renewed':off<0?'Expired':'Active',renewed,email:'customer'+(i+1)+'@example.com',mobile:'98'+String(10000000+i),waOpt:i%9!==0,emailOpt:i%11!==0})}
