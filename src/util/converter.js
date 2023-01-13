

const krillToLotin = (text) =>{
    let entered_text = text;
    entered_text = entered_text.replace(/љ/g,'ly');
	entered_text = entered_text.replace(/Љ/g,'Ly');
                                                       
	entered_text = entered_text.replace(/њ/g,'ny');
	entered_text = entered_text.replace(/Њ/g,'Ny');
                                                       
	entered_text = entered_text.replace(/џ/g,'dx');
	entered_text = entered_text.replace(/Џ/g,'Dx');

	entered_text = entered_text.replace(/а/g,'a');
	entered_text = entered_text.replace(/б/g,'b');
	entered_text = entered_text.replace(/ц/g,'c');
	entered_text = entered_text.replace(/ч/g,'cx');
	entered_text = entered_text.replace(/ћ/g,'cy');
	entered_text = entered_text.replace(/д/g,'d');
	entered_text = entered_text.replace(/ђ/g,'dy');
	entered_text = entered_text.replace(/е/g,'e');
	entered_text = entered_text.replace(/ф/g,'f');
	entered_text = entered_text.replace(/г/g,'g');
	entered_text = entered_text.replace(/х/g,'h');
	entered_text = entered_text.replace(/и/g,'i');
	entered_text = entered_text.replace(/ј/g,'j');
	entered_text = entered_text.replace(/к/g,'k');
	entered_text = entered_text.replace(/л/g,'l');
	entered_text = entered_text.replace(/м/g,'m');
	entered_text = entered_text.replace(/н/g,'n');
	entered_text = entered_text.replace(/о/g,'o');
	entered_text = entered_text.replace(/п/g,'p');
	entered_text = entered_text.replace(/р/g,'r');
	entered_text = entered_text.replace(/с/g,'s');
	entered_text = entered_text.replace(/ш/g,'sx');
	entered_text = entered_text.replace(/т/g,'t');
	entered_text = entered_text.replace(/у/g,'u');
	entered_text = entered_text.replace(/в/g,'v');
	entered_text = entered_text.replace(/з/g,'z');
	entered_text = entered_text.replace(/ж/g,'zx');
                                                      
	entered_text = entered_text.replace(/А/g,'A');
	entered_text = entered_text.replace(/Б/g,'B');
	entered_text = entered_text.replace(/Ц/g,'C');
	entered_text = entered_text.replace(/Ч/g,'Cx');
	entered_text = entered_text.replace(/Ћ/g,'Cy');
	entered_text = entered_text.replace(/Д/g,'D');
	entered_text = entered_text.replace(/Ђ/g,'Dy');
	entered_text = entered_text.replace(/Е/g,'E');
	entered_text = entered_text.replace(/Ф/g,'F');
	entered_text = entered_text.replace(/Г/g,'G');
	entered_text = entered_text.replace(/Х/g,'H');
	entered_text = entered_text.replace(/И/g,'I');
	entered_text = entered_text.replace(/Ј/g,'J');
	entered_text = entered_text.replace(/К/g,'K');
	entered_text = entered_text.replace(/Л/g,'L');
	entered_text = entered_text.replace(/М/g,'M');
	entered_text = entered_text.replace(/Н/g,'N');
	entered_text = entered_text.replace(/О/g,'O');
	entered_text = entered_text.replace(/П/g,'P');
	entered_text = entered_text.replace(/Р/g,'R');
	entered_text = entered_text.replace(/С/g,'S');
	entered_text = entered_text.replace(/Ш/g,'Sx');
	entered_text = entered_text.replace(/Т/g,'T');
	entered_text = entered_text.replace(/У/g,'U');
	entered_text = entered_text.replace(/В/g,'V');
	entered_text = entered_text.replace(/З/g,'Z');
	entered_text = entered_text.replace(/Ж/g,'Zx');

    return entered_text
}



export default {krillToLotin}