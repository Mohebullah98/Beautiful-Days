# Beautiful-Days

Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse.<br> For instance, given the number 21, its reverse is 12 . Their difference is 9. The number 120 reversed is 21, and their difference is 99.

<p>She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.</p>

Given a range of numbered days <strong>i->j</strong>,  and a number <strong>k</strong>, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where <i>|i-reverse(i)|</i> is evenly divisible by k. 
  
  If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.

  <h3>Function Description</h3>

Complete the beautifulDays function in the editor below.

beautifulDays has the following parameter(s):
<ul>
  <li>int i: the starting day number</li>
  <li>int j: the ending day number</li>
  <li>int k: the divisor</li>
</ul>
  <h3>Returns</h3>
int: the number of beautiful days in the range
  
  <h3>example</h3>
  Input: 20 23 6
  
  Output: 2
  <br>
  <ul>
    <li>Day <strong>20</strong> is beautiful because |20-2|/6 = 3 which is a whole number</li>
    <li>Day <strong>21</strong> isn't beautiful because |21-12|/6 = 9/6 which is not a whole number</li>
    <li>Day <strong>22</strong> is beautiful because |22-22|/6 = 0 which is a whole number</li>
    <li>Day <strong>23</strong> isn't beautiful because |23-32|/6 = 9/6 which is not a whole number</li>
  </ul>
