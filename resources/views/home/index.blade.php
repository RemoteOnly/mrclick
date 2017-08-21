@extends('layouts.home')

@section('body_header')
    <link rel="stylesheet" href="{{ asset('/css/index.css') }}">
@endsection

@section('content')
    <div class="container-body">
        <section id="mainconts">
            <article id="top">
                <div class="wrapper">
                    <img class="imgChange" src="/img/firstview02_illust_pc.png" alt="学習塾専用アプリComiruコミル">
                    <section class="btns">
                        <a href="https://itunes.apple.com/az/app/comiru/id1219573110?mt=8">
                            <img src="/img/apple_dl.svg" alt="ios">
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.comiruapp&amp;hl=ja">
                            <img class="apple" src="/img/google_dl.png" alt="Android">
                        </a>
                    </section>
                </div>
                <div class="diagonally_bottom">
                    <img src="/img/yellowdiagonally.svg" alt="yellowiagonally">
                </div>
            </article>
            <article id="points">
                <div class="wrapper">
                    <h2 style="top: -399.75px; margin-bottom: -399.75px;">
                        <img src="/img/title_01.png" alt="Comiruのここがスゴい">
                    </h2>
                    <ul class="point01">
                        <li class="illust">
                            <img src="/img/point_illust_01.png" alt="アナログ業務の効率化で授業以外の業務時間を大幅削減！">
                        </li>
                        <li class="text">
                            <div class="number">
                                <img src="/img/point_number_01.png" alt="">
                            </div>
                            <h3>
                                <img src="/img/point_copy_01.png" alt="アナログ業務の効率化で授業以外の業務時間を大幅削減！">
                            </h3>
                            <p>アナログで非効率な手書きの指導報告書の作成はなんと<strong>10分の1</strong>の時間に短縮できます。</p>
                            <a data-target="point01modal" class="modal-open">
                                実際の動画はコチラ
                            </a>
                        </li>
                    </ul>
                    <ul class="point02">
                        <li class="illust">
                            <img src="/img/point_illust_02.png" alt="保護者への連絡もカンタン＆スピーディ">
                        </li>
                        <li class="text">
                            <div class="number">
                                <img src="/img/point_number_02.png" alt="">
                            </div>
                            <h3>
                                <img src="/img/point_copy_02.png" alt="保護者への連絡もカンタン＆スピーディ">
                            </h3>
                            <p>保護者へ一括送信でき、<strong>既読・未読</strong>の確認もできます。</p>
                            <a data-target="con5" class="modal-open">
                                実際の画面を見る
                            </a>
                        </li>
                    </ul>
                    <ul class="point03">
                        <li class="illust">
                            <img src="/img/point_illust_03.png" alt="保護者とのチャット機能で信頼度UP!">
                        </li>
                        <li class="text">
                            <div class="number">
                                <img src="/img/point_number_03.png" alt="">
                            </div>
                            <h3>
                                <img src="/img/point_copy_03.png" alt="保護者とのチャット機能で信頼度UP!">
                            </h3>
                            <p>Comiruのチャット機能で講師と保護者のコミュニケーションが円滑になります。すでにComiru上で<strong>5万件以上</strong>の保護者と塾講師のコメントのやり取りがあります。
                            </p>
                            <a data-target="point03modal" class="modal-open">
                                事例はコチラ
                            </a>
                        </li>
                    </ul>
                    <ul class="point04">
                        <li class="illust">
                            <img src="/img/point_illust_05.png" alt="アカウントごとに権限が設定できるからセキュリティも万全！">
                        </li>
                        <li class="text">
                            <div class="number">
                                <img src="/img/point_number_04.png" alt="">
                            </div>
                            <h3>
                                <img src="/img/point_copy_05.png" alt="アカウントごとに権限が設定できるからセキュリティも万全！">
                            </h3>
                            <p>重要な情報へのアクセスを制限できるから、個人情報の漏洩などのリスクがありません。</p>
                            <a data-target="point04modal" class="modal-open">
                                実際の画面を見る
                            </a>
                        </li>
                    </ul>
                    <ul class="point05">
                        <li class="illust">
                            <img src="/img/point_illust_06.png" alt="入退室はプッシュ通知で保護者におしらせ">
                        </li>
                        <li class="text">
                            <div class="number">
                                <img src="/img/point_number_05.png" alt="">
                            </div>
                            <h3>
                                <img src="/img/point_copy_06.png" alt="入退室はプッシュ通知で保護者におしらせ">
                            </h3>
                            <p>
                                生徒の入退室情報、指導報告、その他の連絡事項もアプリ（プッシュ通知）で保護者にお知らせ。アプリだからメール送信に伴う迷惑メール設定問題もなし。講師の画面もスマホで使いやすくできていて、学生講師に好評です。</p>
                            <a data-target="point05modal" class="modal-open">
                                実際の画面を見る
                            </a>
                        </li>
                    </ul>
                    <section class="modal">
                        <div id="point01modal" class="modal-content">
                            <div class="image">
                                <iframe src="/img/207609070.html" width="640" height="360" frameborder="0"
                                        webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="point03modal" class="modal-content">
                            <div class="image">
                                <img class="imgChange" src="/img/pointmodal_03_pc.png" alt="">
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="point04modal" class="modal-content">
                            <div class="image">
                                <img class="imgChange" src="/img/pointmodal_04_pc.png" alt="">
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="point05modal" class="modal-content">
                            <div class="image">
                                <img src="/img/pointmodal_05.png" alt="">
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="con2" class="modal-content">
                            <div class="image">
                                <img class="imgChange" src="/img/pc_02.png" alt="休講のお知らせ/comiru">
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="con3" class="modal-content">
                            <div class="image">
                                <img class="imgChange" src="/img/pc_03.png" alt="請求書の案内/comiru">
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="con4" class="modal-content">
                            <div class="image">
                                <img class="imgChange" src="/img/pc_04.png" alt="塾だよりの送信/comiru"></div>
                            <a class="modal-close">閉じる</a>
                        </div>
                        <div id="con5" class="modal-content">
                            <div class="image">
                                <img class="imgChange" src="/img/pc_05.png" alt="熱いやり取り/comiru">
                            </div>
                            <a class="modal-close">閉じる</a>
                        </div>
                    </section>
                </div>
                <div class="diagonally_bottom">
                    <img src="/img/whitediagonally.svg" alt="whiteiagonally">
                </div>
            </article>
            <article id="request">
                <div class="wrapper">
                    <h2 style="top: -423.735px; margin-bottom: -423.735px;"><img src="/img/title_03.png"
                                                                                 alt="資料請求お申込み"></h2>
                    <section class="intro">
                        <div class="illust"></div>
                        <p>わかりやすい資料をご用意しました。<br>資料のお申込みは下のフォームで</p>
                    </section>
                    <form method="POST">
                        {{ csrf_field() }}
                        <dl>
                            <dt><label for="name">お名前</label></dt>
                            <dd><input type="name" name="name" id="name" required=""></dd>
                        </dl>
                        <dl>
                            <dt><label for="companyname">塾名</label></dt>
                            <dd><input type="text" name="school_name" id="companyname" required=""></dd>
                        </dl>
                        <dl>
                            <dt><label for="pref">所在地</label></dt>
                            <dd>
                                <select name="pref" id="pref" style="margin-bottom: 10px;" required="">
                                    <option value="" selected="">都道府県を選択してください</option>
                                    <option value="北海道">北海道</option>
                                    <option value="青森県">青森県</option>
                                    <option value="岩手県">岩手県</option>
                                    <option value="宮城県">宮城県</option>
                                    <option value="秋田県">秋田県</option>
                                    <option value="山形県">山形県</option>
                                    <option value="福島県">福島県</option>
                                    <option value="茨城県">茨城県</option>
                                    <option value="栃木県">栃木県</option>
                                    <option value="群馬県">群馬県</option>
                                    <option value="埼玉県">埼玉県</option>
                                    <option value="千葉県">千葉県</option>
                                    <option value="東京都">東京都</option>
                                    <option value="神奈川県">神奈川県</option>
                                    <option value="新潟県">新潟県</option>
                                    <option value="富山県">富山県</option>
                                    <option value="石川県">石川県</option>
                                    <option value="福井県">福井県</option>
                                    <option value="山梨県">山梨県</option>
                                    <option value="長野県">長野県</option>
                                    <option value="岐阜県">岐阜県</option>
                                    <option value="静岡県">静岡県</option>
                                    <option value="愛知県">愛知県</option>
                                    <option value="三重県">三重県</option>
                                    <option value="滋賀県">滋賀県</option>
                                    <option value="京都府">京都府</option>
                                    <option value="大阪府">大阪府</option>
                                    <option value="兵庫県">兵庫県</option>
                                    <option value="奈良県">奈良県</option>
                                    <option value="和歌山県">和歌山県</option>
                                    <option value="鳥取県">鳥取県</option>
                                    <option value="島根県">島根県</option>
                                    <option value="岡山県">岡山県</option>
                                    <option value="広島県">広島県</option>
                                    <option value="山口県">山口県</option>
                                    <option value="徳島県">徳島県</option>
                                    <option value="香川県">香川県</option>
                                    <option value="愛媛県">愛媛県</option>
                                    <option value="高知県">高知県</option>
                                    <option value="福岡県">福岡県</option>
                                    <option value="佐賀県">佐賀県</option>
                                    <option value="長崎県">長崎県</option>
                                    <option value="熊本県">熊本県</option>
                                    <option value="大分県">大分県</option>
                                    <option value="宮崎県">宮崎県</option>
                                    <option value="鹿児島県">鹿児島県</option>
                                    <option value="沖縄県">沖縄県</option>
                                </select>
                                <input type="text" name="city" id="city" placeholder="市町村を入力してください" required="">
                            </dd>
                        </dl>
                        <dl>
                            <dt><label for="people">生徒数</label></dt>
                            <dd>
                                <select name="student_amount" id="people" required="">
                                    <option value="" selected="">生徒数を選択してください</option>
                                    <option value="50人未満">50人未満</option>
                                    <option value="50人以上100人未満">50人以上100人未満</option>
                                    <option value="100人以上300人未満">100人以上300人未満</option>
                                    <option value="300人以上500人未満">300人以上500人未満</option>
                                    <option value="500人以上1000人未満">500人以上1000人未満</option>
                                    <option value="1000人以上">1000人以上</option>
                                </select>
                            </dd>
                        </dl>
                        <dl>
                            <dt><label for="mail">メールアドレス</label></dt>
                            <dd><input type="email" name="email" id="mail" required=""></dd>
                        </dl>
                        <dl>
                            <dt><label for="tel">電話番号</label></dt>
                            <dd><input type="tel" name="tel" id="tel" required=""></dd>
                        </dl>
                        <button type="submit" data-ga="send-materials">送信する</button>
                    </form>
                </div>
                <div class="diagonally_bottom">
                    <img src="/img/yellowdiagonally.svg" alt="yellowiagonally">
                </div>
            </article>
            <article id="company">
                <div class="wrapper">
                    <h2 style="top: -422.136px; margin-bottom: -422.136px;">
                        <img src="/img/title_04.png" alt="資料請求お申込み"></h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>運営会社</th>
                            <td>株式会社POPER（ポパー）</td>
                        </tr>
                        <tr>
                            <th>設立</th>
                            <td>2015年1月15日</td>
                        </tr>
                        <tr>
                            <th>所在地</th>
                            <td>東京都新宿区南町３４－１<br>
                                グレンパーク神楽坂３０５
                            </td>
                        </tr>
                        <tr>
                            <th>TEL</th>
                            <td><a href="tel:0362650951">03-6265-0951</a></td>
                        </tr>
                        <tr>
                            <th>メール</th>
                            <td><a href="mailto:info@poper.co">info@poper.co</a></td>
                        </tr>
                        <tr>
                            <th>代表者</th>
                            <td>栗原慎吾</td>
                        </tr>
                        <tr>
                            <th>取引銀行</th>
                            <td>みずほ銀行 渋谷中央支店</td>
                        </tr>
                        <tr>
                            <th>事業内容</th>
                            <td>インターネットサービス開発</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
        <footer>
            <section class="menubar">
                <a class="totop" href="https://comiru.jp/#"> </a>
                <a class="torequest" href="https://comiru.jp/#request"> </a>
                <a class="login" href="{{ route('login') }}">塾講師・オーナーログイン</a>
            </section>
            <section class="links">
                <a href="{{ route('home.term') }}">利用規約</a>
                <a href="{{ route('home.policy') }}">プライバシーポリシー</a>
            </section>
            <address>
                ©2017 POPER.INC
            </address>
            <!-- added -->
        </footer>

    </div>

    <footer class="footer">
        <nav class="footer-nav">
            <ul class="footer-nav-items">
                <li><a href="https://comiru.jp/teachers/login">塾講師・オーナーログイン</a></li>
            </ul>
            <ul class="footer-nav-items">
                <li><a href="https://comiru.jp/terms">利用規約</a></li>
                <li><a href="https://comiru.jp/policy">プライバシーポリシー</a></li>
                <li><a href="https://comiru.jp/contact">お問い合わせ</a></li>
            </ul>
        </nav>
        <p class="footer-copyright">© POPER Inc.</p>
    </footer>
@endsection