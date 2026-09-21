function openPage(page){


let content =
document.getElementById("content");



if(page==="withdraw"){


content.innerHTML=

<h2>
📤 برداشت میو
</h2>

<p>
روش برداشت را انتخاب کنید
</p>


<button onclick="alert('در نسخه تستی فعال شد')">

برداشت با آیدی

</button>


;

}



else if(page==="invite"){


content.innerHTML=

<h2>
👥 دعوت دوستان
</h2>


<p>

لینک دعوت تستی:

</p>


<code>

t.me/mio_bot?start=12345

</code>


;

}



else if(page==="daily"){


content.innerHTML=

<h2>
🎁 میو روزانه
</h2>


<p>

هر روز 340,000 میو

</p>


<button onclick="alert('پاداش تستی دریافت شد')">

دریافت

</button>


;

}



else if(page==="balance"){


content.innerHTML=

<h2>
💎 موجودی

</h2>


<p>

340,000 میو

</p>


;

}



}
