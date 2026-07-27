class Solution:
    def minWindow(self, s: str, t: str) -> str:


        letters_set = set(list(t))


        letters_count_map, letters_expected_map = {}, {}

        for c in t:
            tmp = letters_expected_map.get(c);

            if tmp is None:
                letters_expected_map[c] = 1
            else:
                letters_expected_map[c] = tmp + 1

        

        need_chars = len(t)

        min_substr = ""
        # maximum length of word can be 1000 as of requirements
        min_length = 1000000

        have_chars = 0;

        
        left, right = 0, 0

        while right < len(s):

            right_val = s[right]

            # check whether character is in the set
            if not right_val in letters_set:
                # if not then we just move the right pointer
                right += 1
                continue
            
            # check whether the character is not recognized yet
            if not right_val in letters_count_map:
                letters_count_map[right_val] = 1
            else:
                letters_count_map[right_val] = letters_count_map[right_val] + 1
            
            if letters_count_map[right_val] <= letters_expected_map[right_val]:
                have_chars += 1


            print(s[left:right+1])

            # check whether we have all of the letters
            if have_chars == need_chars:
                print(s[left:right+1])
                # if yes then we need to check whether current word is the shortest
                
                # ------------------------------
                # TODO duplication below 
                curr_word = s[left:right+1]
                curr_word_len = len(curr_word)
                if curr_word_len < min_length:
                    min_length = curr_word_len
                    min_substr = curr_word
                # ------------------------------
                

                # now we move left pointer
                while have_chars == need_chars:
                    
                    left_val = s[left]
                    

                    # check whether character is in the set
                    if not left_val in letters_set:
                        # if not then we just move the left pointer
                        left += 1
                        continue

                    # ------------------------------
                    # TODO duplication above
                    curr_word = s[left:right+1]
                    curr_word_len = len(curr_word)
                    if curr_word_len < min_length:
                        min_length = curr_word_len
                        min_substr = curr_word
                    # ------------------------------

                    # check whether the character is recognized
                    if left_val in letters_count_map:
                        letters_count_map[left_val] = letters_count_map[left_val] - 1

                        if letters_count_map[left_val] < letters_expected_map[left_val]:
                            have_chars -= 1

                        if letters_count_map[left_val] == 0:
                            del letters_count_map[left_val]

                        
                            
                            
                        left += 1
                        
                        

                    

                    


                
            # we have moved left pointer until we no longer have all characters
            # matched so we go back to moving right pointer
            right += 1


        return min_substr 
                    
                    
            
             



        # set_to_find = set(list(t))

        # set_already_found = set()

        # letters_occur = dict.fromkeys(set_to_find, 0)

        # current_window = deque()

        # left, right = 0, 0

        # min_len = 1000000
        # min_res = ""

        # print(set_to_find)

        # while right < len(s):
            
        #     curr_val = s[right]

        #     if curr_val not in set_to_find:
        #         # jesli litera nie musi byc w ogole znaleziona to po prostu przesuwamy
        #         if len(set_already_found) == 0:
        #             left += 1
        #         right += 1
        #         print('curr val not needed: ', curr_val)
        #         continue

        #     curr_val_occur = letters_occur[curr_val]

        #     if curr_val_occur == 0:
        #         # po prostu dodajemy
        #         letters_occur[curr_val] = curr_val_occur + 1
        #         set_already_found.add(curr_val)
        #         right += 1
        #         if len(set_already_found) == len(set_to_find):
        #             curr_res = s[left:right]
        #             if len(curr_res) < min_len:
        #                 min_res = curr_res
        #                 min_len = len(curr_res)

        #     else:
        #         # sprawdzamy czy left mozemy przesunąć
        #         # jak tak to przesuwamy aż nie będzie tej wartośći
        #         left_val = s[left]

        #         while (left_val == curr_val or left_val not in set_to_find):
        #             # jeśli przesunęliśmy left to wtedy odejmujemy occurrence
        #             if left_val == curr_val:
        #                 letters_occur[curr_val] = curr_val_occur - 1

        #             left += 1
        #             left_val = s[left]

        #         right += 1
        #         if len(set_already_found) == len(set_to_find):
        #             curr_res = s[left:right]
        #             if len(curr_res) < min_len:
        #                 min_res = curr_res
        #                 min_len = len(curr_res)

                    

        # return min_res           

                

                


                
            


