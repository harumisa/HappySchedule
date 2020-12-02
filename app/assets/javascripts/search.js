$(function() {

  let search_schedule_list = $(".Content__MainContent--Schedules");

  function appendSchedule(schedule, icon) {
    let html = `<div class="Schedule">
                  <div class="Schedule__Frame">
                    <div class="Schedule__Frame--Text">
                      <ul>
                        <li>
                          <span>date　</span>
                        </li>
                        <li class="TextDate">
                          ${schedule.date}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>title　</span>
                        </li>
                        <li class="TextTitle">
                          ${schedule.title}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>category　</span>
                        </li>
                        <li class="TextCategory">
                          <i class="${icon} CategoryIcon"></i>
                          ${schedule.category}
                        </li>
                      </ul>
                      <ul class="TextMemo">
                        <li>
                          <span>memo　</span>
                        </li>
                        <li class="TextMemo">
                          ${schedule.memo}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="Schedule__Edit">
                    <i class="fas fa-edit EditIcon"></i>
                    <div class="EditMenu">
                      <a class="DeleteText" rel="nofollow" data-method="delete" href="/schedules/${schedule.id}">予定を削除する</a>
                      <a class="EditText" href="/schedules/${schedule.id}/edit">予定を編集する</a>
                    </div>
                  </div>
                </div>`
    search_schedule_list.append(html);
  }

  function appendNoSchedule(msg) {
    let html = `<div class="NoScheduleMessage">
                  ${msg}
                </div>`
    search_schedule_list.append(html);
  }

  $(".ScheduleSearch__Box--Input").on("keyup", function() {
    let input = $(".ScheduleSearch__Box--Input").val();
    $.ajax({
      type: 'GET',
      url: '/schedules/search',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(schedules) {
      search_schedule_list.empty();
      if (schedules.length !== 0) {
        schedules.forEach(function(schedule) {
          if (schedule.category == 'デート') {
            let icon = 'fas fa-heart'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == '旅行') {
            let icon = 'fas fa-suitcase'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == 'ショッピング') {
            let icon = 'fas fa-shopping-bag'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == 'イベント') {
            let icon = 'fas fa-music'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == 'おでかけ') {
            let icon = 'fas fa-car'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == '病院') {
            let icon = 'fas fa-hospital-alt'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == '学校') {
            let icon = 'fas fa-graduation-cap'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == '仕事') {
            let icon = 'fas fa-desktop'
            appendSchedule(schedule, icon);
          }
          if (schedule.category == '記念日') {
            let icon = 'fas fa-birthday-cake'
            appendSchedule(schedule, icon);
          }
        });
      } else if (input.length == 0) {
        return false;
      } else {
        appendNoSchedule('一致するスケジュールはありません')
      }
    })
    .fail(function() {
      alert("検索に失敗しました");
    });
  });
});