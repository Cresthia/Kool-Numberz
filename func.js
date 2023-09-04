var i = 0;

function down()
{
    i -= 1;
    document.getElementById("Counter").innerHTML = i;
}
function up()
{
    i += 1;
    document.getElementById("Counter").innerHTML = i;
}
function reset()
{
    i = 0;
    document.getElementById("Counter").innerHTML = i;
}