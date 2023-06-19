// header

const header_2_txt_ = [document.getElementById('header_2_txt_1'), document.getElementById('header_2_txt_2'),
document.getElementById('header_2_txt_3'), document.getElementById('header_3_txt_1'), document.getElementById('logo')];

let head;

function header(head){
    head.addEventListener('mouseover', function(){
        head.style.textDecorationLine = 'underline';
    });
    head.addEventListener('mouseout', function(){
        head.style.textDecorationLine = 'none';
    });
};

header(header_2_txt_[0]);
header(header_2_txt_[1]);
header(header_2_txt_[2]);
header(header_2_txt_[3]);
header(header_2_txt_[4]);

// main, main_remove

const main_remove_txt_ = [document.getElementById('main_remove_txt_1'), document.getElementById('main_remove_txt_2'),
document.getElementById('main_remove_txt_3'), document.getElementById('main_remove_txt_4'), document.getElementById('main_remove_txt_5')];

let mai;

function main_1(mai){
    mai.addEventListener('mouseover', function(){
        mai.style.backgroundColor = 'rgba(39, 77, 134, 0.11)';
    });
    mai.addEventListener('mouseout', function(){
        mai.style.backgroundColor = '#ffffff';
    });
};

main_1(main_remove_txt_[0]);
main_1(main_remove_txt_[1]);
main_1(main_remove_txt_[2]);
main_1(main_remove_txt_[3]);
main_1(main_remove_txt_[4]);

// main, main_button

const main_button_ = [document.getElementById('main_button_1'), document.getElementById('main_button_2')];
const m_button_t = [document.getElementById('main_button_txt_1'), document.getElementById('main_button_txt_2')];

let mai_b;
let mai_b_t;

function m_btn(mai_b, mai_b_t){
    mai_b.addEventListener('mouseover', function(){
        mai_b.style.backgroundColor = 'rgb(0, 120, 210)';
    });
    mai_b_t.addEventListener('mouseover', function(){
        mai_b_t.style.color = 'white';
    });
    mai_b.addEventListener('mouseout', function(){
        mai_b.style.backgroundColor = 'rgba(39, 77, 134, 0.11)';
    });
    mai_b_t.addEventListener('mouseout', function(){
        mai_b_t.style.color = 'rgba(0, 57, 92, 0.8)';
    });
};

function m_btn_1(mai_b, mai_b_t){
    mai_b.addEventListener('mouseover', function(){
        mai_b.style.backgroundColor = 'rgba(39, 77, 134, 0.11)';
    });
    mai_b_t.addEventListener('mouseover', function(){
        mai_b_t.style.color = 'rgba(0, 57, 92, 0.8)';
    });
    mai_b.addEventListener('mouseout', function(){
        mai_b.style.backgroundColor = 'rgb(0, 120, 210)';
    });
    mai_b_t.addEventListener('mouseout', function(){
        mai_b_t.style.color = 'white';
    });
};

m_btn(main_button_[0], m_button_t[0]);
m_btn_1(main_button_[1], m_button_t[1]);

// fleshboard

const fl_btn = [document.getElementById('left_button'), document.getElementById('right_button')];

let fl;

function fl_b(fl){
    fl.addEventListener('mouseover', function(){
        fl.style.backgroundColor = 'rgba(0,0,0,0.4)';
    });
    fl.addEventListener('mouseout', function(){
        fl.style.backgroundColor = 'rgba(0,0,0,0)';
    });
};

fl_b(fl_btn[0]);
fl_b(fl_btn[1]);

// news main_footer

const nmf = [document.getElementById('big_board'), document.getElementById('little_board_1'), document.getElementById('little_board_2'),
document.getElementById('little_board_3'), document.getElementById('little_board_4'), document.getElementById('main_footer_block_1'),
document.getElementById('main_footer_block_2'), document.getElementById('main_footer_block_3'), document.getElementById('main_footer_block_4')];

let new_main_f;

function f_nmf(new_main_f){
    new_main_f.addEventListener('mouseover', function(){
        new_main_f.style.boxShadow = '0 0 5px 8px rgb(0, 120, 210)';
    });
    new_main_f.addEventListener('mouseout', function(){
        new_main_f.style.boxShadow = 'none';
    });
};

f_nmf(nmf[0]);
f_nmf(nmf[1]);
f_nmf(nmf[2]);
f_nmf(nmf[3]);
f_nmf(nmf[4]);
f_nmf(nmf[5]);
f_nmf(nmf[6]);
f_nmf(nmf[7]);
f_nmf(nmf[8]);

// footer

const ftan = [document.getElementById('footer_txt_a1'),document.getElementById('footer_txt_a2'),document.getElementById('footer_txt_a3'),
document.getElementById('footer_txt_a4'),document.getElementById('footer_txt_a5'),document.getElementById('footer_txt_a6'),
document.getElementById('footer_txt_a7'),document.getElementById('footer_txt_a8'),document.getElementById('footer_txt_a9'),
document.getElementById('footer_txt_a10'),document.getElementById('footer_txt_a11'),document.getElementById('footer_txt_a12'),
document.getElementById('footer_txt_a13'),document.getElementById('footer_txt_a14'),document.getElementById('footer_txt_a15'),
document.getElementById('footer_txt_a16'),document.getElementById('footer_txt_a17'),document.getElementById('footer_txt_a18'),
document.getElementById('footer_txt_a19'),document.getElementById('footer_txt_a20'),document.getElementById('footer_txt_a21'),
document.getElementById('footer_txt_a22'),document.getElementById('footer_txt_a23'),document.getElementById('footer_txt_a24'),
document.getElementById('footer_txt_a25'),document.getElementById('footer_txt_a26'),document.getElementById('footer_txt_a27'),];

let a = 0;

do{
    header(ftan[a]);
    a++;
}while(a < 27);

const log_btn = [document.getElementById('logo_fb'),document.getElementById('logo_inst'),document.getElementById('logo_tg'),
document.getElementById('logo_vk'),document.getElementById('logo_ytb')];

let logo_button;

function log_b(logo_button){
    logo_button.addEventListener('mouseover', function(){
        logo_button.style.width = '100px';
    });
    logo_button.addEventListener('mouseover', function(){
        logo_button.style.height = '100px';
    });
    logo_button.addEventListener('mouseover', function(){
        logo_button.style.zIndex = '1';
    });
    logo_button.addEventListener('mouseout', function(){
        logo_button.style.width = '58px';
    });
    logo_button.addEventListener('mouseout', function(){
        logo_button.style.height = '58px';
    });
    logo_button.addEventListener('mouseout', function(){
        logo_button.style.zIndex = '0';
    });
};

log_b(log_btn[0]);
log_b(log_btn[1]);
log_b(log_btn[2]);
log_b(log_btn[3]);
log_b(log_btn[4]);